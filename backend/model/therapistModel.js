const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    patientEmail: [{
        type: String
    }]
});

module.exports = mongoose.model("Therapist", therapistSchema);