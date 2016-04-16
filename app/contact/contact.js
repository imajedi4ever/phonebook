'use strict';

angular.module( 'myApp.contact', [
  'ngRoute'
] )
.config( [ '$routeProvider', function( $routeProvider ) {
  $routeProvider.when( '/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  } );
} ] )
.controller( 'ContactCtrl', function( $scope, $routeParams, $filter ) {
  $scope.header = "Contact";
  $scope.id = $routeParams.contactId;
} );
