(function () {
    var obj = BaseController.prototype;

    function BaseController() {

    }

    obj.findAll = function () {
        return '/';
    };

    obj.findById = function () {
        return '/:id';
    };

    obj.formAdd = function () {
        return '/formAdd';
    };

    obj.save = function () {
        return '/save';
    };

    obj.formEdit = function () {
        return '/formEdit';
    };

    obj.update = function () {
        return '/update';
    };

    obj.delete = function () {
        return '/delete';
    };

    module.exports = BaseController;
})();