'use strict';

var User = require('./../models/user.js');
var Q = require('q');

function findUserById(id) {
    var deffered = Q.defer();

    // get a user based on id
    User.findOne({_id: id}, function(err, user){
        if(err){
            deffered.reject(err);
        } else if(!user) {
            deffered.reject(new Error('no user found with ' + id));
        }

        deffered.resolve(user);
    });

    return deffered.promise;
}

function findUserByEmail(email) {
    var deffered= Q.defer();

    User.findOne({email: email}, function(err, user){
        if(err || !user){
            if(err){
                deffered.reject(new Error(err));
            } else { // no user
                deffered.reject(new Error('no user found'));
            }
        }

        deffered.resolve(user);
    });

    return deffered.promise;
}

function deleteUser(id) {
    var deffered = Q.defer();

    User.remove({_id: id}, function(err){
        if(err) {
            deffered.reject(err);
        } else {
            deffered.resolve({deleted: true});
        }
    });

    return deffered.promise;
}

module.exports = {
    'findUserById': findUserById,
    'findUserByEmail': findUserByEmail,
    'deleteUser': deleteUser
};