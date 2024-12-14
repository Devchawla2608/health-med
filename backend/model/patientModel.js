const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    therapistEmail: { 
        type: String, 
        default: ""
    },
    score: {
        type: Number,
        default: 0
    },
    token:{
        type:Number,
        default:0
    },
    ques: [{
        type: String
    }]
});

module.exports = mongoose.model("Patient", patientSchema);