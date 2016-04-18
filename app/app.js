'use strict';

// Declare app level module which depends on views, and components
angular.module( 'phonebook', [
  'ngRoute',
  'phonebook.contacts',
  'phonebook.contact',
  'phonebook.version'
] ).
config( [ '$routeProvider', function ( $routeProvider ) {
  $routeProvider.otherwise( {
    redirectTo: '/contacts'
  } );
} ] );
