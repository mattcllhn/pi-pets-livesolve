console.log('sourced');

var myApp = angular.module('myApp', []);

myApp.controller('viewPetController', ['$scope', '$http',
  function($scope, $http) {
    console.log('view pet controller');

    $scope.getPets = function () {
      $http({
        method: 'GET',
        url: '/pets'
      }).then(function success(responseObject) {
        console.log('got em=', responseObject);
        $scope.pets = responseObject.data;
      }, function error(errorObject){
        console.log(errorObject);
      });
    };
}]);
