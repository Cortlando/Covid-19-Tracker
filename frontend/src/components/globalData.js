import React from 'react'
import axios from 'axios' 

import '../CSS/globalData.css'

class GlobalData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cases: 0,
            deaths: 0,
            recovered: 0,
            region: this.props.region,
            title: this.props.title,
        }
    }

    componentDidMount = () => {
        this.getGlobalData();
        this.timerID = setInterval(
            () => this.tick(),
            5000
          );
    }

    async getGlobalData() {
        let response = await axios.get("https://coronavirus-19-api.herokuapp.com/"+ this.state.region)

        this.setState(
            {
            cases: response.data.cases,
            deaths: response.data.deaths,
            recovered: response.data.recovered
            }
        )
    }

    tick() {
        this.getGlobalData();
    }

    render () {
        return (
        <div className='center'>
            <h1 className='heading'>{this.state.title} Covid-19 Data</h1>
            <div className='row'>
                <h1 className='heading' id='cases'>Confirmed Cases</h1>
                <h2 className='data'>{this.state.cases}</h2>
            </div>
            <div className='row'>
                <h1 className='heading' id='deaths'>Total Deaths</h1>
                <h2 className='data'>{this.state.deaths}</h2>
            </div>
            <div className='row' >
                <h1 className='heading' id='recovered'>Total Recovered</h1>
                <h2 className='data'>{this.state.recovered}</h2>
            </div>
        </div>
        )
    }
}

export default GlobalData;