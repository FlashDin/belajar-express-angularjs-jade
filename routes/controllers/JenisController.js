(function () {
    var express = require('express');
    var BaseController = require('./BaseController');
    var router = express.Router();
    var obj = new BaseController();

    router.get(obj.findAll(), function (req, res) {
        res.render('jenis/list', {list: "jkl"});    // file.jade
    });

    router.get(obj.formAdd(), function (req, res) {
        res.send('jenis/add: ' + req.query['username']);
        // req.query.username
    });

    router.post(obj.save(), function (req, res) {
        res.send('Username: ' + req.query['username']);
        // req.query.username
    });

    router.get(obj.formEdit(), function (req, res) {
        res.send('jenis/edit: ' + req.query['username']);
        // req.query.username
    });

    router.put(obj.update(), function (req, res) {
        res.send('Username: ' + req.body.username);
    });

    router.delete(obj.delete(), function (req, res) {
        res.send('Username: ' + req.body.username);
    });

    module.exports = router;
})();