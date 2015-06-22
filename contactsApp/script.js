var app = angular.module("gravatar", [])
.controller("gravatarCtrl", function($scope, $http){
  $http.get("https://api.github.com/users/badra25ml")
   .success(function(data){
    $scope.card = data;  
  }); 
  $scope.contacts = [];
  $scope.addContact = function(object){
    $scope.contacts.push(object);
    console.log($scope.contacts);
    }
  $scope.write = function(){
    
  }
  
  
}); 
  