const { createMovie,
            removeMovie,
            getAllMovies,
            getMovies,
            getMovieByTitle } = require("../controllers/moviecontroller");

const router = require("express").Router();


router.post("/createmovie", createMovie)
router.delete("/delete-movie/:id", removeMovie);
router.get("/getAll-movies", getAllMovies)
router.get("/get-movies", getMovies)
router.get("/get-movies/:title", getMovieByTitle)

module.exports = router