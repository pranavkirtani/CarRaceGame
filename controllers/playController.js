raceApp.controller('playController',function($scope,playerService,$state,$uibModal,betService,raceService,$rootScope) {
raceService.createTrucks(playerService.getPlayerData().trucks)
$scope.amount=playerService.getPlayerData().funds;
$rootScope.$on("updateFunds",function(event,data){
    $scope.amount=data;
    $scope.$apply()
});
$rootScope.$on("updatedBetData",function(event,data){
    $scope.isBetPlaced=true;
    $scope.$apply()
})
$scope.isBetPlaced=false;
 $scope.reset=function(){
    
     $state.go('setup')
 }
 $scope.placeBet=function(){
        var $ctrl = this;
        console.log(document.getElementsByClassName('raceApp')[0])
      var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'views/modal.html',
            controller: 'ModalController',
            controllerAs: '$ctrl'
    });
     
    modalInstance.result.then(function (trucks) {
        console.log("truck bet values")
        console.log(trucks)
        betService.setBettingData(trucks)
        }, function () {

    });
 }

 $scope.startRace=function(){

   raceService.start(playerService.getPlayerData().trucks);
    
 }

});