(function() {
    'use strict';

    angular
        .module('app')
        .factory('categoriesService', categoriesService);

    categoriesService.$inject = ['$http'];

    function categoriesService($http) {
        return {
            getCategories: getCategories
        };

        function getCategories() {
            return $http.get('http://categories.services.procvic.cz/categories/10')
                .then(getResults);
                //.catch(console.log('error'));

            function getResults(response) {
                return response.data;
            }
        }
    }
})();