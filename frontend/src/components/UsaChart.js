import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios' 

class UsaChart extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            deaths: 0,
            recovered: 0,
        }
        
    }

    componentDidMount = () => {
        this.getCountryData();
    }

    async getCountryData() {
        let response = await axios.get("https://corona19track.herokuapp.com/UsaChart")

        this.setState({
            data:{
                labels: ["Death Total", "Recovery Total" ],
                datasets: [
                    {
                        label: "Rate",
                        fontColor: [
                            'rgba(255, 255, 255, 0.75)'
                        ],
                        backgroundColor: [
                            "rgba(128, 0, 0, 0.7)",
                            "rgba(225, 77, 77, 0.6)"
                        ],
                        borderColor: [
                            "rgba(128, 0, 0, 1)",
                            "rgba(225, 77, 77, 1)"
                        ],
                        data: [
                            response.data.deaths,
                            response.data.recovered
                        ]
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div style={{ position: "relative"}}>
               <Pie 
                options={{
                    title: {
                        display: true,
                        text: "Recovery vs Death (closed cases)",
                        fontSize: 25,
                        fontColor: 'rgba(255, 255, 255, 1)'
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        onClick: null,
                        labels: {
                            fontColor: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    tooltips: {
                        enabled: true
                    }
                }}
                data={this.state.data}
                />
            </div>
        )
    }
}

export default UsaChart;