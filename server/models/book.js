let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    number: String,
    password:String
    
    
},
{
    collection: "books",
    
    
});
//var userModel=mongoose.model('users',userSchema);
module.exports = mongoose.model('Book', bookModel);