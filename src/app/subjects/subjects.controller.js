(function() {
    'use strict';

    angular
        .module('app.subjects')
        .controller('SubjectsController', SubjectsController);

    SubjectsController.$inject = ['subjectsService'];

    function SubjectsController(subjectsService) {
        var vm = this;

        subjectsService.getSubjects().then(function() {

        }, function() {
            console.log('Problém');
        });
    }
})();
