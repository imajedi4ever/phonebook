'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /contacts when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/contacts");
  });


  describe('contacts', function() {

    beforeEach(function() {
      browser.get('index.html#/contacts');
    });


    it('should render contacts when user navigates to /contacts', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('contact', function() {

    beforeEach(function() {
      browser.get('index.html#/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
