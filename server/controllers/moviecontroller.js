const movie = require("../models/movie");

exports.createMovie = async (req, res) => {

            const {
                        fullName,
                        language,
                        releasedYear,
                        size,
                        quality,
                        genere,
                        format,
                        subtitles,
                        storyline,
                        screenshots,
                        downloadLinks

            } = req.body


            try {
                        const Movie = new movie({
                                    fullName,
                                    language,
                                    releasedYear,
                                    size,
                                    quality,
                                    genere,
                                    format,
                                    subtitles,
                                    storyline,
                                    screenshots,
                                    downloadLinks
                        });

                        await Movie.save();


                        return res.status(200).json({ success: true, message: Movie })
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}

exports.removeMovie = async (req, res) => {
            const { id } = req.params;
          
            try {
                        let Movie = await movie.findByIdAndDelete(id);
                        if (!Movie) {
                                    return res.status(404).json({ success: false, message: "Movie not found" });
                        }
                        return res.status(200).json({ success: true, message: "Movie deleted" });
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message });
            }
}

exports.getAllMovies = async (req, res) => {
            const movies = await movie.find({})
            try {
                        if (!movies) {
                                    return res.status(404).json({ success: false, message: "movies not found" })
                        }
                        return res.status(200).json({ success: true, data: movies })
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}

exports.getMovies = async (req, res) => {
            const { page, limit, genere, movietype } = req.body;
            try {
                        let query = {

                        }

                        if (genere) query.genere = genere
                        if (movietype) query.movieType = movietype;

                        const movies = await movie.find(query).skip(page * limit).limit(limit)

                        if (!movies) {
                                    return res.status(404).json({ success: false, message: "Movies not found" })
                        }

                        return res.status(200).json({ success: true, data: movies })
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}


exports.getMovieByTitle = async (req, res) => {
            const { title } = req.params;
            try {
                        const Movie = await movie.findOne({ movieName: title });

                        if (!movie) {
                                    return res.status(404).json({ success: false, message: "Movie not found" });
                        }

                        return res.status(200).json({ success: true, data: Movie });
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message });
            }

}

