"use strict";

var _ = require('underscore'),
    Q = require('q'),
    request = require('request');

/**
 *
 * @param {Function()} fn
 * @param {String | Object} uri
 * @param {Object | Null} options
 * @returns {Promise}
 */
function fn_as_promised(fn, uri, options){
    var deferred = Q.defer();

    fn(uri, options, function(err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
}

var request_as_promised =  _.partial(fn_as_promised, request);

var fns_to_adapt = [
    'get', 'del', 'head', 'patch', 'post', 'put'
];

fns_to_adapt.forEach(function(fn){
    request_as_promised[fn] = _.partial(fn_as_promised, request[fn]);
});

module.exports =  request_as_promised;
