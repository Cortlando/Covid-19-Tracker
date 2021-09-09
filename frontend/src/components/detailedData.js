import React from 'react'
import axios from 'axios' 

import '../CSS/globalData.css'

class detailedData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            casesPerMil: 0,
            deathsPerMil: 0,
            testsPerMil: 0,
            tests: 0,
            region: this.props.region,
            title: this.props.title,
        }
    }

    componentDidMount = () => {
        this.getData();
        this.timerID = setInterval(
            () => this.tick(),
            25000
          );
    }

    async getData() {
        let response = await axios.get("https://corona19track.herokuapp.com/advancedstats/"+this.state.region)

        this.setState(
            {
            casesPerMil: response.data[0].casesPerOneMillion,
            deathsPerMil: response.data[0].deathsPerOneMillion,
            tests: response.data[0].totalTests,
            testsPerMil: response.data[0].testsPerOneMillion,
            }
        )
    }

    tick() {
        this.getData();
    }

    render () {
        return (
        <div className='center'>
            <h1 className='heading'>Detailed Statistics</h1>
            <div className='row'>
                <h1 className='heading' id='cases'>Cases Per Million</h1>
                <h2 className='data'>{this.state.casesPerMil}</h2>
            </div>
            <div className='row'>
                <h1 className='heading' id='deaths'>Deaths Per Million</h1>
                <h2 className='data'>{this.state.deathsPerMil}</h2>
            </div>
            <div className='row' >
                <h1 className='heading' id='tests'>Total Tested</h1>
                <h2 className='data'>{this.state.tests}</h2>
            </div>
            <div className='row' >
                <h1 className='heading' id='tests'>Tests Per Million</h1>
                <h2 className='data'>{this.state.testsPerMil}</h2>
            </div>
        </div>
        )
    }
}

export default detailedData;