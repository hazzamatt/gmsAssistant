'use strict';

var assistantApp = angular.module('assistantApp', ['ngRoute', 'assistantControllers']);

assistantApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
			when('/home', {
				templateUrl: 'contentFragments/home.html',
				controller: 'HomePageCtrl'
			}).
			when('/gmTools', {
				templateUrl: 'contentFragments/gmTools.html',
				controller: 'GmToolsCtrl'
			}).
			when('/characterCreation', {
				templateUrl: 'contentFragments/characterCreation.html',
				controller: 'CharacterCreationCtrl'
			}).
			when('/characterSheet', {
				templateUrl: 'contentFragments/characterSheet.html',
				controller: 'CharacterSheetCtrl'
			}).
			when('/aboutTheApp', {
				templateUrl: 'contentFragments/aboutTheApp.html',
				controller: 'AboutTheApp'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);