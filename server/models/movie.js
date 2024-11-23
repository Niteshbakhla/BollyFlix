const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
            fullName: {
                        type: String,
                        required: true
            },
            language: {
                        type: String,
                        // required: true
            },
            releasedYear: {
                        type: Number
            },

            size: {
                        type: String
            },
            quality: {
                        type: String
            },

            genere: {
                        type: String,
                        enum: ["Action", "Comedy", "Drama", "Horror", "Romance", "Thriller"]
            },
            format: {
                        type: String
            },
            movieType: {
                        type: String,
                        enum: ["action", "comedy", "drama", "horror", "romance", "thriller"]
            },
            subtitles: {
                        type: String,
                        default: "N/A"
            },
            storyline: {
                        type: String
            },

            screenshots: {
                        type: Array,
            },
            downloadLinks: {
                        type: Array
            },
})

module.exports = mongoose.model("Movie", movieSchema)