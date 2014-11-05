var User = require('./../models/user.js');

var userHelper = require('./../helpers/user.js');

module.exports = function(router) {

    /**
     * ROUTE for users
     */
    router

    /**
     * find all users
     */
    .get('/user', function(req, res){

        User.find({},function(err, users){
            if(err || !users) {
                res.send(301);
            }

            res.json(users);
        });
    })

    /**
     * find user by ID
     */
    .get('/user/:userid', function(req, res){
        // id of user
        var id = req.params.userid;

        userHelper
            .findUserById(id)
            .then(function(user){
                res.json(user);
            }, function(err){
                res.json(404,err);
            });

    })

    /**
     * create a user in the system
     * @param  {Object} req : Request object
     * @param  {Object} res : Response object
     */
    .post('/user', function(req, res){

        // ensure email and password is set
        if(!req.body.user.email || !req.body.user.password) {
            var msg = 'email and password must be provided';
            res.send(406, {
                err: msg
            });
        }

        userHelper
            .findUserByEmail(req.body.user.email)
            .then(function(user){
                // if a user excists with that email return a err msg
                if(user){

                    res.send(401, {
                        err: 'That email is taken'
                    });

                }

            }, function(err){

                var user = new User();

                user.email = req.body.user.email;

                user.password = req.body.user.password;

                user.save(function(err){
                    if (err) {
                        return res.send(err);
                    }

                    res.send(200);
                });

            });
    })

    .delete('/user/:userid', function(req, res){
        var id = req.params.userid;
        userHelper.deleteUser(id)
            .then(function(deleted){
                if(deleted) {
                    res.json(200);
                }
            }, function(err) {
                console.log(err);
            });
    });


    // return the router object
    return router;
};