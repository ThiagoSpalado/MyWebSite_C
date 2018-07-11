// MODULE
var catholicApp = angular.module('catholicApp', ['ngRoute', 'ngResource']);

// ROUTES

catholicApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'app/common/app.html'
        //controller: 'homeController'
    })
    
    .when('/', {
        templateUrl: 'app/modules/views/blog.html'
        //controller: 'homeController'
    })

    .when('/', {
        templateUrl: 'app/modules/views/contact.html'
        //controller: 'homeController'
    })

    .when('/', {
        templateUrl: 'app/modules/views/elements.html'
        //controller: 'homeController'
    })

    .when('/', {
        templateUrl: 'app/modules/views/ministries.html'
        //controller: 'homeController'
    })

    .when('/', {
        templateUrl: 'app/modules/views/sermons.html'
        //controller: 'homeController'
    })
});


// CONTROLLERS
 catholicApp.controller('homeController',  ['$scope', function($scope) {
    
 }]);

// catholicApp.controller('forecastController', ['$scope', function($scope) {
    
// }]);