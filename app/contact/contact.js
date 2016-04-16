'use strict';

angular.module( 'myApp.contact', [
  'ngRoute',
  'ngStorage'
] )
.config( [ '$routeProvider', function( $routeProvider ) {
  $routeProvider.when( '/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  } );
} ] )
.controller( 'ContactCtrl', function( $scope, $routeParams, $localStorage, $filter ) {
  $scope.header = 'Contact';

  $scope.contact = $filter( 'filter' )( $localStorage.contacts, { id: $routeParams.contactId } )[0];
  $scope.id = $scope.contact.id;
  $scope.name = $scope.contact.name;
  $scope.phone = $scope.contact.phone;
  $scope.email = $scope.contact.email;
  $scope.birthday = $scope.contact.birthday;
  $scope.avatar = $scope.contact.avatar;
} );
