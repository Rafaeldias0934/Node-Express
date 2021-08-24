const express = require('express')
const bodyParse = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParse.urlencoded({ extended: false}))


userRoute(app)

app.get('/', (req, res) => res.send('Olá mundo pelo Express'))

app.listen(port, () => console.log('API Rodando na porta 3000'))