'use strict';

angular.module( 'myApp.contacts', [
  'ngRoute',
  'ngStorage'
] )
.config( [ '$routeProvider', function( $routeProvider ) {
  $routeProvider
  .when( '/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  } )
  .when( '/contact/:contactId?', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  } );
} ] )

.controller( 'ContactsCtrl', function( $scope, $localStorage, $sessionStorage, $http ) {
  $scope.$storage = $localStorage;
  $scope.header = 'Contacts';

  $http.get( "assets/contacts.json" ).then( function( response ) {
    $scope.$storage.contacts = response.data.contacts;
  } );
} );
