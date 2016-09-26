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

myApp.controller('addPetController', ['$scope', '$http',
function($scope, $http) {
  console.log('add pet controller');
  $scope.addPet = function(inputName, inputAnimal, inputAge, inputImage) {

    console.log('button click');

    var petToSend = {
      name: inputName,
      animal_type: inputAnimal,
      age: inputAge,
      image: inputImage
    };

    console.log('pet to send = ', petToSend);
    
    $http({
      method: 'POST',
      url: '/pets',
      data: petToSend
    }).then(function success(responseObject) {
      console.log('got em=', responseObject);
    }, function error(errorObject){
      console.log(errorObject);
    });
  };
}]);
