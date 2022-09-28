const axios = require('axios');
const { PutCommand, ScanCommand } = require ("@aws-sdk/lib-dynamodb")
const { ddbDocClient } = require("../../dbDocClient")


exports.getQuestion = async (req, res) => {
    const { category, difficulty }  = req.params
    const replaceAmpersand = category.replace("&", "_and_")
    const noSpacesCat = replaceAmpersand.replace(/\s/g, "")
    const apiFriendlyCategory = noSpacesCat.toLowerCase()
    const questionData = await axios
        .get(`https://the-trivia-api.com/api/questions?categories=${apiFriendlyCategory}&limit=1&region=US&difficulty=${difficulty}`)
        .then((res) => {
            return res.data
        })
        .catch(error => console.log(error));
    
    let  { id, question, correctAnswer } = questionData[0]
    const checkedQuestion = await checkForPastQuestion(id)

    if (checkedQuestion === 0){
        addQuestionToDB(id, question, correctAnswer)
        res.status(200).json({
            status: "success",
            data: questionData
        })
    } else {
        this.getQuestion(req, res)
    }
};

const checkForPastQuestion = async (questionId) => {
    const params = {
        TableName: "past_trivia_questions",
        ProjectionExpression: "id",
        ExpressionAttributeNames: {"#idNum": "id"},
        FilterExpression: "#idNum = :i",
        ExpressionAttributeValues: {
            ":i": questionId
        }
    };
    try {
        const data = await ddbDocClient.send(new ScanCommand(params));
        return data.Count
    } catch (err) {
        console.log("Error:", err.stack)
    }
};

const addQuestionToDB = async (questionId, question, answer) => {
    const params = {
        TableName: "past_trivia_questions",
        Item: {
            id: questionId,
            question,
            answer
        }
    };
    try {
        const data = await ddbDocClient.send(new PutCommand(params));
        console.log("Success - item added:", data);
    } catch (err) {
        console.log("Error:", err.stack)
    }
};