'use strict';

var assistantApp = angular.module('assistantApp', ['ngRoute', 'assistantControllers']);

assistantApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
			when('/home', {
				templateUrl: 'contentFragments/home.html',
				controller: 'HomePageCtrl'
			}).
			when('/characterCreation', {
				templateUrl: 'contentFragments/characterSheet.html',
				controller: 'CharacterCreationCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);