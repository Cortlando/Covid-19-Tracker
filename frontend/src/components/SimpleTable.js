import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'

import '../CSS/SimpleTable.css'


class SimpleTable extends React.Component {

    constructor () {
        super();

        this.state = {
            rows: []
        }
    }

    async getData() {

        //grab all data from the api
        let response = await axios.get('https://corona.lmao.ninja/v2/countries/');

              let temp = response.data.map((row) => {
                const {country, cases, deaths, recovered, tests} = row
                return(
                    <TableRow key={country}>
                        <TableCell >{country}</TableCell>
                        <TableCell align='left'>{cases}</TableCell>
                        <TableCell align='left'>{deaths}</TableCell>
                        <TableCell align='left'>{recovered}</TableCell>
                        <TableCell align='left'>{tests}</TableCell>
                    </TableRow>
                )
            });

            this.setState({
                rows: temp
            })
      }

      componentDidMount() {
          this.getData();
      }

   
render(){
  return (
      <div>
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="left">Cases</TableCell>
            <TableCell align="left">Deaths</TableCell>
            <TableCell align="left">Recoveries</TableCell>
            <TableCell align="left">Tests</TableCell>
          </TableRow>
        </TableHead>
            <TableBody className='table'>
                {this.state.rows}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  );}
}

export default SimpleTable