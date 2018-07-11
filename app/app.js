// MODULE
var catholicApp = angular.module('catholicApp', ['ngRoute', 'ngResource']);

// ROUTES

catholicApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'app/common/app.html'
        //controller: 'homeController'
    })
    
});


// CONTROLLERS
 catholicApp.controller('homeController', ['$scope', function($scope) {
    
 }]);

// catholicApp.controller('forecastController', ['$scope', function($scope) {
    
// }]);