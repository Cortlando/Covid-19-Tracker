var express = require('express');
var router = express.Router();
var request = require("request");

router.get('/all', function(req, res, next) {
    
    /* options for request function */
    var options = {
        'method': 'GET',
        'url': 'https://corona.lmao.ninja/v2/all',
        'headers': {
        }
    }

    /* Request data from api */
    request(options, function (error, response) {
        if(error) throw new Error(error);

        let data = {}; 
        data = JSON.parse(response.body); 
        console.log(data);

        let temp = [{casesPerOneMillion: data.casesPerOneMillion, deathsPerOneMillion: data.deathsPerOneMillion, testsPerOneMillion: data.testsPerOneMillion, totalTests: data.tests}]

        res.send(temp);
        
    });

    
});

router.get('/countries/:country', function(req, res, next) {
    
    /* options for request function */
    var options = {
        'method': 'GET',
        'url': 'https://corona.lmao.ninja/v2/countries/'+req.params.country,
        'headers': {
        }
    }

    /* Request data from api */
    request(options, function (error, response) {
        if(error) throw new Error(error);

        let data = {}; 
        data = JSON.parse(response.body); 
        console.log(data);

        let temp = [{casesPerOneMillion: data.casesPerOneMillion, deathsPerOneMillion: data.deathsPerOneMillion, testsPerOneMillion: data.testsPerOneMillion, totalTests: data.tests}]

        res.send(temp);
        
    });

    
});

module.exports = router;