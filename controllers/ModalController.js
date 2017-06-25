raceApp.controller('ModalController',function($scope,playerService,$state,$uibModalInstance) {
 $scope.trucks=new Array(parseInt(playerService.getPlayerData().trucks));
console.log("trcuks")
console.log($scope.trucks)
$scope.data={
 truck:[] 
}
$ctrl=this;
$ctrl.ok = function () {

    $uibModalInstance.close($scope.data.truck)
  };
  $ctrl.cancel= function () {
    $uibModalInstance.dismiss('cancel');
  };
});