var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//This is the guy who does the dirty work. It catches all routes by using the wildcard symbol "*" behind the root
//and then you set the route as a simple url parameter
router.get('*/:route', function (req, res) {
    //Get the file name from parameters
    var filepath = req.params['0'];
    // var filename = req.params.route;
    var filename = req.params.route.replace(".html",".jade");

    //Asynchronously rendering client-side routes from partials folder
    res.render('../views' + filepath + '/' + filename);
    // res.render('index', {title: filepath + filename});
});


module.exports = router;