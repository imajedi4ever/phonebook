'use strict';

angular.module( 'myApp.contacts', [
  'ngRoute' 
] )
.config( [ '$routeProvider', function( $routeProvider ) {
  $routeProvider.when( '/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  } );
} ] )

.controller( 'ContactsCtrl', function( $scope, $http ) {
  $scope.header = 'Contacts';

  $http.get( "assets/contacts.json" ).then( function( response ) {
    $scope.contacts = response.data.contacts;
  } );
} );
