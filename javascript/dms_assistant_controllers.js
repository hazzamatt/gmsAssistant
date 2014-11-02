'use strict';

var assistantControllers = angular.module('assistantControllers', []);

assistantControllers.controller('HomePageCtrl', function($scope){

});

assistantControllers.controller('CharacterCreationCtrl', function($scope){
	$scope.levelCheck = function(){
		if($("#cLevel").val() > 20)
		{
			$("#cLevel").val("20");
		}
	}
});