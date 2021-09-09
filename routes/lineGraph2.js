var express = require('express');
var router = express.Router();
var request = require("request");
var bodyParser = require("body-parser");
var cors = require("cors");

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,POST,OPTIONS,DELETE",
    "preflightContinue": true
}

router.use(cors());
router.use(cors(corsOptions));
router.use(bodyParser.json());

/* GET line graph data */
router.get('/:country', function(req, res, next) {
    
    let country = req.params.country
    /* options for request function */
    var options = {
        'method': 'GET',
        'url': 'https://api.covid19api.com/total/country/'+country+'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z',
        'headers': {
            
        }
    }

    /* Request data from api */
    request(options, function (error, response) {
        if(error) throw new Error(error);
        //console.log(response.body); //display response.body

        let data = [{}]; //object to hold data from api call
        data = JSON.parse(response.body); //removes double quotes
        console.log("# of Data points: " + data.length)
        let dates = []; //array to store dates
        let cases = []; //array to store cases
        var i = 0;
        
        res.send(data);
        
    });

    
});


module.exports = router;