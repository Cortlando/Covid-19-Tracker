import React from 'react'
import axios from 'axios'

class Test extends React.Component {

    constructor() {
        super();

        this.state = {
        }
    }

    componentDidMount = () => {
        this.testData()
        console.log('Component mounted')
    }

    async testData() {

        let response = await axios.get('http://localhost:5000/')

        console.log(response)
    }

    render() {
        return(
            <div>
                F
            </div>
        )
    }
}

export default Test;