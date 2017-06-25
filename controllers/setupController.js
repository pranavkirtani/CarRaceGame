raceApp.controller('setupController',function($scope,playerService,$state,raceService) {
 
$scope.startGame=function(){
     
    playerService.setPlayerData({"name":$scope.name,"trucks":$scope.trucks,"funds":$scope.funds});
    $state.go('play')
}

});