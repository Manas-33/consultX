const mongoose = require('mongoose');

const ClientSchema= new mongoose.Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
        unique: true
    },
    PhoneNumber: {
        type: Number
    },
    UploadedQrURL:{
        type:String
    },
    IntersestedConsulation:{
        type:String
    }
});

module.exports = mongoose.model("Clients", ClientSchema);