const express = require("express");
const {getAllQuestions, getQuestion} = require("../controllers/questionsController")

const router = express.Router()

router
    .route("/:category/:difficulty")
    .get(getQuestion);

module.exports = router;