const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb")
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb")

const ddbClient = new DynamoDBClient({ region: "us-east-2"})

const marshallOptions = {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: false
};

const unmarshallOptions = {
    wrapNumbers: false
};

const translateConfig = { marshallOptions, unmarshallOptions };

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, translateConfig)

module.exports = { ddbDocClient };