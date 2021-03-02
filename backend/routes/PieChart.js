var express = require('express');
var router = express.Router();
var request = require("request");
//var bodyParser = require("body-parser");


/* GET data */
router.get('/', function(req, res, next) {
    
    /* options for request function */
    var options = {
        'method': 'GET',
        'url': 'https://coronavirus-19-api.herokuapp.com/all',
        'headers': {
            
        }
    }

    /* Request data from api */
    request(options, function (error, response) {
        if(error) throw new Error(error);
        //console.log(response.body);

        let data = {}; //object to hold data from api call
        data = JSON.parse(response.body); //removes double quotes

        /* Choose specific
        data we want to display */
        const subset = (({ deaths, recovered }) => ({ deaths, recovered}))(data);
        console.log(data); //display all data from api in the console
        res.send(subset); //display subset data to localhost:5000/PieChart
        
    });

    
});

module.exports = router;