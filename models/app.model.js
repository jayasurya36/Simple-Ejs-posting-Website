const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    city : String,
    profession : String
})
module.exports = mongoose.model('Post' , PostSchema);

// <!-- name, email, age, city, profession -->