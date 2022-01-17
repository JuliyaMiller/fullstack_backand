const mongoose = require('mongoose');
const Router = require('express').Router;


const UserRouter = Router();

UserRouter.get('/', (req, res) => {
    res.send('hello');
})

module.exports = UserRouter();