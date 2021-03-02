var express = require('express');
var router = express.Router();
var cors = require("cors");
var bodyParser = require("body-parser");

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,POST,OPTIONS,DELETE",
  "preflightContinue": true
}

router.use(cors());
router.use(cors(corsOptions));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/help', function(req, res) {

  res.send("Fixed the cors policy issues!")

});

module.exports = router;
