import React from 'react'
import DenseAppBar from "./Navbar"
//import CountriesTable from './CountriesTable'
import SimpleTable from './SimpleTable'
import '../CSS/Main.css'

function Countries() {

    return(
        <div>
            <DenseAppBar />
            <div className="container">
                <div className="row">
                    <div className='cardCenter'>
                        <SimpleTable />
                    </div>
                </div>
            </div>
            <div className='footer'>
                
            </div>
        </div>
    )

}

export default Countries;