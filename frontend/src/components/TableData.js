import React from 'react'
import axios from 'axios' 

import '../CSS/TableData.css'

class TableData extends React.Component {

    constructor() {
        super();

        this.state = {
           countries: [],
        }
    }

    componentDidMount = () => {
        this.getCountryData();
        console.log('mounted')
    }

    async getCountryData () {
        console.log('Region: '+ this.props.region)
        let response = await axios.get('https://corona.lmao.ninja/v2/'+this.props.region);
        console.log('Response: ')
        console.log(response)

        let temp = response.data.map((row) => {
            const {state, cases, deaths, active, tests} = row
            return(
                <tr className='tRow' key={state}>
                    <td id='table' className='color'>{state}</td>
                    <td id='table' className='color'>{cases}</td>
                    <td id='table' className='color'>{deaths}</td>
                    <td id='table' className='color'>{active}</td>
                    <td id='table' className='color'>{tests}</td>
                </tr>
            )
        })

        this.setState({
            countries: temp
        })

    }

    render () {
        return (
        <div className='center'>
            <table className='stateTable'>
                <tr>
                    <th className="Thead">Country</th>
                    <th className="Thead">Total Cases</th>
                    <th className="Thead">Total Deaths</th>
                    <th className="Thead">Active Cases</th>
                    <th className="Thead">Total Tests</th>
                </tr>
                    {this.state.countries}
            </table>
        </div>
        )
    }
}

export default TableData;