(function() {
    'use strict';

    angular
        .module('app')
        .directive('modal', modalDirective);

    modalDirective.$inject = ['$modal'];

    function modalDirective($modal) {
        return {
            transclude: true,
            restrict: 'EA',
            template: '<a href="#" ng-click="open()" ng-transclude>{{ name }}</a>',
            scope: {
                controller: '@'
            },
            link: function (scope, element, attributes) {
                scope.open = function() {
                    var modalInstance = $modal.open({
                        templateUrl: attributes.templateUrl,
                        controller: attributes.controller
                    });
                }
            }
        }
    }
})();
