const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
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
    FilledProfile: {
        type: Boolean
    },
    Expertise: {
        type: String
    },
    ExpertFees: {
        type: String
    },
});

module.exports = mongoose.model("Expert", ExpertSchema);