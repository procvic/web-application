var app = angular.module('app', [
    'ngRoute',
    'headerModule',
    'homeModule',
    'categoryModule'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
        redirectTo : 'home'
    });

    if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
    }
}]);
