(function() {
    'use strict';

    angular
        .module('app.categories')
        .config(categoriesRouter);

    categoriesRouter.$inject = ['$stateProvider'];

    function categoriesRouter($stateProvider) {
        $stateProvider.state('categories', {
            url: '/categories',
            templateUrl : 'app/categories/templates/categories.html',
            controller : 'CategoriesController'
        });
    }
})();
