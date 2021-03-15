const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());

require('./config/routes')(app)

app.listen(3030, () => {
    console.log("Backend Executando")
})