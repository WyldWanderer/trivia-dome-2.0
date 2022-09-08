const bodyParser = require('body-parser');
const fs = require ('fs');
const axios = require('axios');


exports.getQuestion = async (req, res) => {
    const category = req.params.category
    const difficulty = req.params.difficulty
    const replaceAmpersand = category.replace("&", "_and_")
    const noSpacesCat = replaceAmpersand.replace(/\s/g, "")
    const apiFriendlyCategory = noSpacesCat.toLowerCase()
    const questionData = await axios
        .get(`https://the-trivia-api.com/api/questions?categories=${apiFriendlyCategory}&limit=1&region=US&difficulty=${difficulty}`)
        .then((res) => {
            console.log(res.data)
            return res.data
        })
        .catch(error => console.log(error));
    res.status(200).json({
        status: "success",
        data: questionData
    })
};