(function() {
   'use strict';

    angular
        .module('app.categories')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['$scope', 'categoriesService'];

    function CategoriesController($scope, categoriesService) {
        categoriesService.getCategories().then(function(categories) {
            $scope.categories = categories;
        });
    }
})();
