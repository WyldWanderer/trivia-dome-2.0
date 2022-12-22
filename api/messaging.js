const awsIot = require('aws-iot-device-sdk')

const device = awsIot.device({
    keyPath:"./certificates/private.pem.key",
    certPath: "./certificates/certificate.pem.crt",
    caPath:"./certificates/AmazonRootCA3.pem",
    clientId: "trivia_test_thing",
    host: process.env.AWS_IOT_ENDPOINT, 
});

device.on('connect', function() {
    console.log('connect');
    device.suscribe('topic_1');
    device.publish('topic_2', JSON.stringify({test_data: 1}))
});

device.on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
})