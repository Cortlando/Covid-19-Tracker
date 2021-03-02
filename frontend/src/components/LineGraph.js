import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Graph extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data:{
                labels: ["Feb 01", "Feb 04", "Feb 07", "Feb 10", "Feb 13", "Feb 16", "Feb 19",
                    "Feb 22", "Feb 25", "Feb 28", "Mar 02", "Mar 05", "Mar 08", "Mar 11",
                    "Mar 14", "Mar 17", "Mar 20", "Mar 23", "Mar 26", "Mar 29", "Apr 01",
                    "Apr 04", "Apr 07", "Apr 10", "Apr 13", "Apr 16", "Apr 19", "Apr 22",
                    "Apr 25"],
                datasets: [
                    {
                        label: "Cases",
                        backgroundColor: "rgba(255, 77, 77, 0.7)",
                        borderColor: "rgba(255, 77, 77, 1)",
                        data: [
                            14553,
                            24545,
                            34876,
                            43099,
                            64438,
                            71329,
                            75700,
                            78651,
                            80828,
                            84615,
                            90443,
                            98425,
                            109991,
                            126214,
                            156475,
                            198161,
                            275680,
                            379105,
                            532491,
                            724220,
                            936851,
                            1196571,
                            1424278,
                            1687939,
                            1911456,
                            2162368,
                            2406575,
                            2637439,
                            2919404
                        ]
                    }
                ]
            }
        }
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
                        text: "Global data for cases",
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
                                callback: function(value) {
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
                            label: function (tooltipItem) {
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

export default Graph;