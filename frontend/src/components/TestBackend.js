
import React from 'react'
import axios from 'axios' 


class TestBackend extends React.Component {

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
        let response = await axios.get('https://corona.lmao.ninja/v2/countries');
        console.log('Response: ')
        console.log(response)

        let temp = response.data.map((row) => {
            const {country, cases, deaths, recovered} = row
            return(
                <tr key={country}>
                    <td id='table' className='color'>{country}</td>
                    <td id='table' className='color'>{cases}</td>
                    <td id='table' className='color'>{deaths}</td>
                    <td id='table' className='color'>{recovered}</td>
                </tr>
            )
        })

        this.setState({
            countries: temp
        })
4
    }

    render () {
        return (
        <div className='center'>
            <table>
                <tr>
                    <th className="header">Country</th>
                    <th className="header">Cases</th>
                    <th className="header">Deaths</th>
                    <th className="header">Recovered</th>
                </tr>
                {this.state.countries}
            </table>
        </div>
        )
    }
}

export default TestBackend;