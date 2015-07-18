(function() {
    'use strict';

    angular
        .module('app')
        .factory('subjectsService', subjectsService);

    subjectsService.$inject = ['$http', '$localStorage'];

    function subjectsService($http, $localStorage) {
        return {
            getSubjects: getSubjects
        };

        function getSubjects() {
            return $http.get('http://gateway.procvic.cz/categories/subjects?token=' + $localStorage.accessToken)
                .then(getResults);
            //.catch(console.log('error'));

            function getResults(response) {
                return response.data;
            }
        }
    }
})();
