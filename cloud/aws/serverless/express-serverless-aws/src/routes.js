const express = require('express')

const routes = express.Router({
    mergeParams: true
})

routes.get('/', (req, res) => {
    res.status(200).send({ message: 'Hi from GET' })
})

routes.post('/', (req, res) => {
    res.status(201).send({ message: 'Hi from POST' })
})

routes.get('/hisham', (req, res) => {
    res.status(201).send({ message: 'Hi from ADMIN' })
})

module.exports = routes