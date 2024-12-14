const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },  
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    isPatient: {
        type: Boolean,
        default: true,
        required: true
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true,
        min: 8,
    }
});

module.exports = mongoose.model("Users", userSchema);