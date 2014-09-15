(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(){
      toastr.success('User successsfully registered!');
      $location.path('/login');
    }

    function failure(){
      toastr.error('Error durring user registration, try again.');
      $scope.user={};
    }

    $scope.register=function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();

