var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var jenisRouter = require('./routes/controllers/JenisController');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('partials', path.join(__dirname, 'views/partials'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// url root
app.use('/', indexRouter);
// app.use('/barang', usersRouter);
// app.use('/brgmasuk', usersRouter);
// app.use('/detailbrgmasuk', usersRouter);
// app.use('/detailpengambilanpribadi', usersRouter);
// app.use('/detailpengeluaranlain', usersRouter);
// app.use('/detailpenjualan', usersRouter);
// app.use('/detailreturbrgmasuk', usersRouter);
// app.use('/detailreturpenjualan', usersRouter);
// app.use('/detailservis', usersRouter);
// app.use('/distributor', usersRouter);
// app.use('/jenis', jenisRouter);
// app.use('/jnspengeluaran', usersRouter);
// app.use('/pengambilanpribadi', usersRouter);
// app.use('/pengeluaranlain', usersRouter);
// app.use('/penjualan', usersRouter);
// app.use('/returbrgmasuk', usersRouter);
// app.use('/returpenjualan', usersRouter);
// app.use('/servis', usersRouter);
// app.use('/toko', usersRouter);
// app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// app.listen(3000);
module.exports = app;
