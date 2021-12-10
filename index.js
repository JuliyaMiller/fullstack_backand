const express = require('express');
const body_parser = require('body-parser');

const app = express();
const users = require('./db/user.json');

const PORT = 8030;

app.get('/', (req, res) => {
    res.send(users);
  });

  app.get('/:id', (req, res) => {
    userId = req.params.id;

    if(req.method === "GET")
    {
      for(i in users.users){
        (users.users[i].id == userId) && res.status(200).send(users.users[i]);
      }   

    }
    res.status(405).send({'message': 'asd'});
  })
  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })