let mongoose = require('mongoose');
//create a show

let showsModel = mongoose.Schema({
    name: String,
    createdBy :String,
    address: String,
    genre: String,
    rating: Number,
},
{
    collection: "shows"
}
);
module.exports = mongoose.model('shows', showsModel);
