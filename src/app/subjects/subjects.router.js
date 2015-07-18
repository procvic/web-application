(function () {
    'use strict';

    angular
        .module('app.subjects')
        .config(SubjectsRouter);

    SubjectsRouter.$inject = ['$stateProvider'];

    function SubjectsRouter($stateProvider) {
        $stateProvider.state('subjects', {
            url: '/subjects',
            templateUrl: 'app/subjects/templates/subjects.html',
            controller: 'SubjectsController',
            controllerAs: 'controller',
            data: {
                sidebar: false
            }
        });
    }
})();
