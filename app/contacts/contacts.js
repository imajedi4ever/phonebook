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
.controller( 'ContactsCtrl', function( $scope, $localStorage, $http ) {
  $scope.$storage = $localStorage;
  $scope.header = 'Contacts';

  if ( $.isEmptyObject( $localStorage.contacts ) ) {
    $http.get( 'assets/json/contacts.json' ).then( function( response ) {
      $scope.$storage.contacts = response.data.contacts;
    } );
  }

  $scope.submit = function() {
    if ( $scope.newName ) {
      $localStorage.contacts.push( {
        "id" : $localStorage.contacts.length + 2,
        "name" : $scope.newName,
        "phone" : $scope.newPhone,
        "email" : $scope.newEmail,
        "birthday" : $scope.newBirthday,
        "avatar" : $scope.newAvatar
      } );
      $( '#addModal' ).modal( 'hide' );
    } else {
      alert( "Name is required." );
    }
  };
} );
