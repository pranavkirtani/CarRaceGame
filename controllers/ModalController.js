raceApp.controller('ModalController',function($scope,playerService,$state,$uibModalInstance) {
 $scope.trucks=new Array(parseInt(playerService.getPlayerData().trucks));

$scope.data={
 truck:[] 
}
$ctrl=this;
$ctrl.ok = function () {
  var total=0;
    for(var i=0;i<$scope.data.truck.length;i++){
        total=total+parseInt($scope.data.truck[i]);
    }
    var player_funds=playerService.getPlayerData().funds;
    if(total>player_funds){
        return $scope.error=true;
    }
    $uibModalInstance.close($scope.data.truck)
  };
  $ctrl.cancel= function () {
    $uibModalInstance.dismiss('cancel');
  };
});