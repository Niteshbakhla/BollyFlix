const mongoose = require("mongoose")

const admin = new mongoose.Schema({
            username: {
                        type: String,
                        required: true,
                        unique: true
            },
            password: {
                        type: String,
                        required: true
            }
});


module.exports = mongoose.model("Admin", admin)