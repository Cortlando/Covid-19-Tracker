import React from 'react'
import DenseAppBar from "./Navbar"
import Chart from './PieChart';
import Graph from './LineGraph';
import GlobalData from './globalData'
import DetailedData from './detailedData'

import '../CSS/Main.css'

function Main() {

    return(
        <div>
            <DenseAppBar />
            <div className="container">
                <div className="row">
                    <div className="leftcol">
                        <div className='cardLeft'>
                            <GlobalData title='Global' region="all" />
                        </div>
                        <div className='cardLeft'>
                            <DetailedData region='all'/>
                        </div>
                    </div>
                    <div className="rightcol">
                        <div className='cardRight'>
                            <Graph />
                        </div>
                        <div className='cardRight'>
                            <Chart />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                
            </div>
        </div>
    )

}

export default Main;