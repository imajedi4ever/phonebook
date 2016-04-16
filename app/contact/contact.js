'use strict';

angular.module( 'myApp.contact', [
  'ngRoute',
  'ngStorage'
] )
.config( [ '$routeProvider', function( $routeProvider ) {
  $routeProvider
  .when( '/contact/update/:contactId?', {
    templateUrl: 'contact/update.html',
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

  $scope.enableEdit = function( type ) {
    switch( type ) {
      case "name":
        $scope.editNameEnabled = true;
        $scope.editableName = $scope.name;
        break;
      case "phone":
        $scope.editPhoneEnabled = true;
        $scope.editablePhone = $scope.phone;
        break;
      case "email":
        $scope.editEmailEnabled = true;
        $scope.editableEmail = $scope.email;
        break;
      case "birthday":
        $scope.editBirthdayEnabled = true;
        $scope.editableBirthday = $scope.birthday;
        break;
      case "avatar":
        $scope.editAvatarEnabled = true;
        $scope.editableAvatar = $scope.avatar;
        break;
      default:
          // TODO
    }
  };

  $scope.disableEdit = function( type ) {
    switch( type ) {
      case "name":
        $scope.editNameEnabled = false;
        break;
      case "phone":
        $scope.editPhoneEnabled = false;
        break;
      case "email":
        $scope.editEmailEnabled = false;
        break;
      case "birthday":
        $scope.editBirthdayEnabled = false;
      case "avatar":
        $scope.editAvatarEnabled = false;
        break;
      default:
        console.log( "Unknown edit type." );
        $scope.disableAllEdits();
    }
  };

  $scope.disableAllEdits = function() {
    $scope.editNameEnabled = false;
    $scope.editPhoneEnabled = false;
    $scope.editEmailEnabled = false;
    $scope.editBirthdayEnabled = false;
    $scope.editAvatarEnabled = false;
  };

  $scope.saveInput = function( type ) {
    switch( type ) {
      case "name":
        $scope.name = $scope.editableName;
        break;
      case "phone":
        $scope.phone = $scope.editablePhone;
        break;
      case "email":
        $scope.email = $scope.editableEmail;
        break;
      case "birthday":
        $scope.birthday = $scope.editableBirthday;
        break;
      case "avatar":
        $scope.avatar = $scope.editableAvatar;
        break;
      default:
        console.log( "Unknown input type." );
    }

    $scope.disableEdit( type );
  };
} );
