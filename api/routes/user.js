var User = require('./../models/user.js');

module.exports = function(router) {

    /**
     * ROUTE for users
     */
    router

    /**
     * Return all users
     */
    .get('/user', function(req, res){
        res.json({
            'hello world': true
        });
    })

    /**
     * creates a user in the system
     * @param  {Object} req : Request object
     * @param  {Object} res : Response object
     */
    .post('/user', function(req, res){

        var user = new User();

        console.log(req.body);

        // user.email =




        res.json();
    });

    return router;
};