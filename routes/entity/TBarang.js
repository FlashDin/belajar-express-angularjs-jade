'use strict';

(function () {
    var obj = TBarang.prototype;

    function TBarang() {

    }

    obj.getRidBarang = function () {
        return this.rid_barang;
    };

    obj.setRidBarang = function (rid_barang) {
        this.rid_barang = rid_barang;
    };

    obj.getRidJenis = function () {
        return this.rid_jenis;
    };

    obj.setRidJenis = function (rid_jenis) {
        this.rid_jenis = rid_jenis;
    };

    obj.getRidToko = function () {
        return this.rid_toko;
    };

    obj.setRidToko = function (rid_toko) {
        this.rid_toko = rid_toko;
    };

    obj.getKdBarang = function () {
        return this.kd_barang;
    };

    obj.setKdBarang = function (kd_barang) {
        this.kd_barang = kd_barang;
    };

    obj.getNmBarang = function () {
        return this.nm_barang;
    };

    obj.getNmBarang = function (nm_barang) {
        this.kd_barang = nm_barang;
    };

    obj.getHrgNet = function () {
        return this.hrg_net;
    };

    obj.setHrgNet = function (hrg_net) {
        this.hrg_net = hrg_net;
    };

    obj.getHrgJual = function () {
        return this.hrg_jual;
    };

    obj.setHrgJual = function (hrg_jual) {
        this.hrg_jual = hrg_jual;
    };

    obj.getStok = function () {
        return this.stok;
    };

    obj.setStok = function (stok) {
        this.stok = stok;
    };

    obj.getWarna = function () {
        return this.warna;
    };

    obj.setWarna = function (warna) {
        this.warna = warna;
    };

    obj.getGambar = function () {
        return this.gambar;
    };

    obj.setGambar = function (gambar) {
        this.gambar = gambar;
    };

    module.exports = TBarang;
})();