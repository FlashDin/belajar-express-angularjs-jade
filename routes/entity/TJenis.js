'use strict';

// this is js ES6
// class TJenis {
//     _rid_jenis;
//     _kd_jenis;
//     _nm_jenis;
//
//     get rid_jenis() {
//         return this._rid_jenis;
//     }
//
//     set rid_jenis(value) {
//         this._rid_jenis = value;
//     }
//
//     get kd_jenis() {
//         return this._kd_jenis;
//     }
//
//     set kd_jenis(value) {
//         this._kd_jenis = value;
//     }
//
//     get nm_jenis() {
//         return this._nm_jenis;
//     }
//
//     set nm_jenis(value) {
//         this._nm_jenis = value;
//     }
// }

// this is nodejs
(function () {
    var obj = TJenis.prototype;

    function TJenis() {

    }

    obj.getRidJenis = function () {
        return this.rid_jenis;
    };

    obj.setRidJenis = function (rid_jenis) {
        this.rid_jenis = rid_jenis;
    };

    obj.getKdJenis = function () {
        return this.kd_jenis;
    };

    obj.setKdJenis = function (kd_jenis) {
        this.kd_jenis = kd_jenis;
    };

    obj.getNmJenis = function () {
        return this.nm_jenis;
    };

    obj.setNmJenis = function (nm_jenis) {
        this.nm_jenis = nm_jenis;
    };

    module.exports = TJenis;
})();

// cara panggil
// var obj = new TJenis();
// obj.setRidJenis(1);
// obj.getRidJenis();

