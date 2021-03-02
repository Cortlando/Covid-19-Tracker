import React from 'react'
import DenseAppBar from "./Navbar"
import UsaChart from './UsaChart';
//import Graph from './LineGraph';
import GlobalData from './globalData'
import LineGraph from './USALine'
import DetailedData from './detailedData'
import SimpleTableUSA from './SimpleTableUSA'


import '../CSS/Main.css'

function USA() {
    return(
        <div>
            <DenseAppBar />
            <div className="container">
                <div className="row">
                    <div className="leftcol">
                        <div className='cardLeft'>
                            <GlobalData title='United States' region='countries/usa'/>
                        </div>
                        <div className='cardLeft'>
                            <DetailedData region='countries/usa'/>
                        </div>
                    </div>
                    <div className="rightcol">
                        <div className='cardRight'>
                            <LineGraph />
                        </div>
                        <div className='cardRight'>
                            <UsaChart />
                        </div>
                        <div className='cardRight'>
                            <SimpleTableUSA />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                
            </div>
        </div>
    )
}
export default USA;