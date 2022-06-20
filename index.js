const express = require('express')

const app = express()

const testOrderInfo = require('./data/order')

app.post('/get-test-order-info', (request, response) => {
    console.log(request.body);
    response.send(testOrderInfo)
})

app.listen(3001, () => {
    console.log('server is running');
})