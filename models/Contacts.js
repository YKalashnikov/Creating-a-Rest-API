const mongoose = require('mongoose');

const Contacts = new mongoose.Schema({
    firstName: {type: String, trim: true, default:""},
    lastName: {type: String, trim: true, default:""},
    dob: {type: String, trim: true, default:""},
    city: {type: String, trim: true, default:""},
    phoneNumber: {type: Number, trim: true, default:""},
    email: {type: String, trim: true, default:""},
})   
module.exports = mongoose.model("Contacts", Contacts);
