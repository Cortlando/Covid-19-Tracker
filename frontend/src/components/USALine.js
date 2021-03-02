import React, { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

class lineGraph extends Component{

    constructor(){
        super();
        this.state ={
            data:{
                labels: [],
                datasets:[{
                    label: "Cases",
                    backgroundColor: "rgba(255, 77, 77, 0.7)",
                    borderColor: "rgba(255, 77, 77, 1)",
                    data: []
                }]
            }
        }
    }
    
    componentDidMount = () => {
        this.getUSAData();
        console.log('mounted')
    }

    async getUSAData() {
        let response = await axios.get("http://localhost:5000/lineGraph2/united-states")
        console.log(response)
       
       
        let tdate = [];
        let tdate2 = [];
        let tdate3 = [];
        let temp = {
            dates: [],
            cases: [],
        }

       for(let i = 0; i < response.data.length; i++){
            temp.dates[i] = response.data[i].Date
            temp.cases[i] = response.data[i].Cases
       }

       
       for(let i = 0; i < temp.dates.length; i++){
            tdate[i] =  new Date(temp.dates[i])
            tdate2[i] = tdate[i].toDateString()
            tdate3[i] = tdate2[i].slice(4,10)
           // temp.dates[i] = tdate[i]
       }
       
       this.setState({
           data:{
               labels : tdate3,
               datasets : [{
                label: "Cases",
                backgroundColor: "rgba(255, 77, 77, 0.7)",
                borderColor: "rgba(255, 77, 77, 1)",
                data: temp.cases
               }]
               
           }
       })
      
        
        console.log(tdate2)
        console.log(tdate3)
        
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'bottom',
        legendOnClick: null,
    }

    render() {
        return (
            <div style={{ position: "relative",}}>
               <Line 
                options={{
                    title: {
                        display: this.props.displayTitle,
                        text: "Cases in the United States",
                        fontSize: 25,
                        fontColor: 'rgba(255, 255, 255, 1)'
                    },
                    legend: {
                        pointStyle: 'rect',
                        display: this.props.displayLegend,
                        position: this.props.legendPosition,
                        onClick: this.props.legendOnClick,
                        labels: {
                            fontColor: 'rgba(255, 255, 255, 0.75)'
                        }
                    },
                    scales: {
                        yAxes: [{
                            color: 'rgba(255, 255, 255, 0.75)',
                            ticks: {
                                beginAtZero: true,
                                fontColor: 'rgba(255, 255, 255, 0.75)',
                                callback: function(value, index, values) {
                                    if (parseInt(value) >= 1000) {
                                       return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    } 
                                    else {
                                        return value;
                                    }
                                }
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
                            color: 'rgba(255, 255, 255, 1)',
                            ticks:{
                                
                                fontColor: 'rgba(255, 255, 255, 1)'
                            },
                            gridLines: {
                                display: true
                            }
                        }]
                     },
                    tooltips: {
                        enabled: true,
                        callbacks: {
                            label: function (tooltipItem, data) {
                                return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }                         
                        }
                    }
                }}
                data={this.state.data}
                />
            </div>
        )
    }
}

export default lineGraph