var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);