(function() {
    'use strict';

    angular
        .module('app.subject', [])
        .config(['$stateProvider', function ($stateProvider){
            $stateProvider.state('subject', {
                url: '/subjects',
                templateUrl : 'app/subject/subjects.html',
                controller : 'SubjectsController'
            });
        }]);
})();
