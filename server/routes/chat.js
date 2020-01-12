const express = require('express');
const routes = express.Router();
const cors = require('cors');

routes.get('/', cors(), (req, res, next) => {
  res.send({text: 'hello'})
})

module.exports = routes;
