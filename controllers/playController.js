raceApp.controller('playController',function($scope,playerService,$state,$uibModal,betService,raceService,$rootScope) {
var player=playerService.getPlayerData();
raceService.createTrucks(player.trucks)
$scope.amount=player.funds;
$scope.player_name=player.name;
$rootScope.$on("updateFunds",function(event,data){
    $scope.amount=data;
    $scope.$apply()
});
$rootScope.$on("updatedBetData",function(event,data){
    $scope.isBetPlaced=data;
    if(data){
        $scope.won=false;
    }
     
    $scope.$apply()
})

$rootScope.$on("winningAmount",function(event,data){
    if(data<=0){
        return;
    }
    $scope.won=true;
    $scope.amount_won=data;
    $scope.$apply()
})


$scope.isBetPlaced=false;
$scope.won=false;
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
        betService.setBettingData(trucks)
        }, function () {

    });
 }

 $scope.startRace=function(){

   raceService.start(playerService.getPlayerData().trucks);
    
 }

});