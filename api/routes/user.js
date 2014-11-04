var User = require('./../models/user.js');

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

        // get a user based on id
        User.findOne({_id: id}, function(err, user){

            if(err || !user){
                res.send(301);
            }

            res.json(user);
        });
    })

    /**
     * create a user in the system
     * @param  {Object} req : Request object
     * @param  {Object} res : Response object
     */
    .post('/user', function(req, res){

        // ensure email and password is set
        if(!req.body.email || !req.body.password) {
            var msg = 'email and password must be provided';
            res.send(406, {
                err: msg
            });
        }

        var user = new User();

        user.email = req.body.email;

        user.password = req.body.password;

        user.save(function(err){
            if (err) {
                return res.send(err);
            }

            res.send(200);
        });
    });

    return router;
};