/**
 * Twine
 * Twine server REST Api definition
 *
 * OpenAPI spec version: 1.0.0
 * Contact: gokmen@goksel.me
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Twine);
  }
}(this, function(expect, Twine) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Twine.ServersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ServersApi', function() {
    describe('deleteServer', function() {
      it('should call deleteServer successfully', function(done) {
        //uncomment below and update the code to test deleteServer
        //instance.deleteServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServer', function() {
      it('should call getServer successfully', function(done) {
        //uncomment below and update the code to test getServer
        //instance.getServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServers', function() {
      it('should call getServers successfully', function(done) {
        //uncomment below and update the code to test getServers
        //instance.getServers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerServer', function() {
      it('should call registerServer successfully', function(done) {
        //uncomment below and update the code to test registerServer
        //instance.registerServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateServer', function() {
      it('should call updateServer successfully', function(done) {
        //uncomment below and update the code to test updateServer
        //instance.updateServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
