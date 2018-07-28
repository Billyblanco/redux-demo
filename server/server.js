const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const app = express();
const port = 3005

let ProductsCtrl = require('./controllers/productsCtrl')

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
}).catch(err => {
  console.log('there was an error connecting to db:', err)
})
app.use(bodyParser.json());

app.get('/api/products', ProductsCtrl.get)
app.post('/api/products', ProductsCtrl.create)
app.put('/api/products/:id', ProductsCtrl.update)
app.delete('/api/products/:id', ProductsCtrl.remove)

app.listen(port, () => {
  console.log('listening on port:', port)
})