(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope','$filter'];

function LunchController($scope,$filter) {
  $scope.lunchmenu = "";
  $scope.statusMessage = "";
  $scope.lunchItemStatus = function () {
    if($scope.lunchmenu){
      var lunchstring = $scope.lunchmenu.split(",");
      if(lunchstring.length < 1){
         $scope.statusMessage = "Please enter data first!";
      }
      else if (lunchstring.length <= 3) {
        $scope.statusMessage = "Enjoy!";
      }
      else if (lunchstring.length > 3) {
        $scope.statusMessage = "Too Much!";
      }
    }
    else {
      $scope.statusMessage = "Please enter data first!"
    }
    //lunchstring.length >= 1 ||
  };
}
})();
