'use strict';

describe('phonebook.version module', function() {
  beforeEach(module('phonebook.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
