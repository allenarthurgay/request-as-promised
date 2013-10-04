"use strict";

var expect = require('chai').expect,
    nock = require('nock'),
    request = require('../lib/request-promised');


describe('request-promised-tests', function(){


    before(function(done){

        done();
    });

    it('should request the url and method via options', function(done){

        var scope = nock('http://blah')
            .post('/honk')
            .reply(204);

        var promise = request('http://blah/honk', {
            method:'POST'
        });

        promise
            .then(function(){
            scope.done();
        }).done(done, done);

    });

    it('should request the url via GET', function(done){

        done();
    });




});