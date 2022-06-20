const express = require('express')

const app = express()
const cors = require('cors')

const testOrderInfo = require('./data/order')

app.use(cors())


app.post('/data/U_Orders/operationList', (request, response) => {
    response.send(testOrderInfo)
})

app.listen(3001, () => {
    console.log('server is running');
})