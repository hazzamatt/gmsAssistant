'use strict';

var assistantControllers = angular.module('assistantControllers', []);

assistantControllers.controller('HomePageCtrl', function($scope){

});

assistantControllers.controller('GmToolsCtrl', function($scope){
	$scope.initList = [];
	$scope.reversedList = [];

	$scope.addInit = function(){
		
		var tempName = $("#personName").val();
		var tempInit = $("#personInit").val();

		if((tempName !== "" && tempName !== null) && (tempInit !== "" && tempInit !== null))
		{
			//If there is already a value in the array
			if($scope.initList.length !== 0)
			{	
				for(var i=0; i <= $scope.initList.length; i++)
				{
					//If new initiative is less than current initiative
					if(parseInt(tempInit) < parseInt($scope.initList[i].initiative))
					{
						$scope.initList.splice(i, 0, {initiative:tempInit, name:tempName});

						$scope.reversedList = $scope.initList.slice(0);

						$scope.reversedList.reverse();
						break;
					}
					else if(i === $scope.initList.length-1)
					{
						$scope.initList.push({initiative:tempInit, name:tempName});

						$scope.reversedList = $scope.initList.slice(0);

						$scope.reversedList.reverse();
						break;
					}
				}
			}
			else
			{
				$scope.initList.push({initiative:tempInit, name:tempName});

				$scope.reversedList = $scope.initList.slice(0);
			}
		}
	};

	$scope.removeInit = function(){
		alert($("#initPreview").val()[0]);

		
	};
});

assistantControllers.controller('CharacterSheetCtrl', function($scope){
	$scope.levelCheck = function(){
		if($("#cLevel").val() > 20)
		{
			$("#cLevel").val("20");
		}
	}
});

assistantControllers.controller('CharacterCreationCtrl', function($scope){
	
});

