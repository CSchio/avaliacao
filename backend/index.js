const express = require('express')
const app = express()

app.use(express.json());

require('./config/routes')(app)

app.listen(8080, () => {
    console.log("Backend Executando")
})

