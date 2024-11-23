const { signup, login, logout } = require("../controllers/authcontroller");

const router = require("express").Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
module.exports = router;