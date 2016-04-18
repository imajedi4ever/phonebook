'use strict';

angular.module('phonebook.version', [
  'phonebook.version.interpolate-filter',
  'phonebook.version.version-directive'
])

.value('version', '0.1');
