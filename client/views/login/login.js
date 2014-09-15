(function(){
  'use strict';

  angular.module('yum.my')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};


    function success(){
      toastr.success('Successfull login!');
      $location.path('/');
    }

    function failure(){
      toastr.error('Error durring user login, try again.');
      $scope.user={};
    }


    $scope.login=function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();

