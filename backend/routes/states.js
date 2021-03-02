var express = require('express');
var router = express.Router();
var request = require("request");

router.get('/', function(req, res, next) {
    
    /* options for request function */
    var options = {
        'method': 'GET',
        'url': 'https://corona.lmao.ninja/v2/states/',
        'headers': {
        }
    }

    /* Request data from api */
    request(options, function (error, response) {
        if(error) throw new Error(error);

        let data = {}; 
        data = JSON.parse(response.body); 
        
        let temp = data.map((row) => {
            const {state, cases, deaths, recovered, tests} = row;
            return{state: state, totalCases: cases, totalDeaths: deaths, totalRecoverd: recovered, percentChange: tests,}
          })

        res.send(temp);
        
    });

    
});

module.exports = router;