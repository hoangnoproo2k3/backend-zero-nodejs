const express = require('express');
const configViewEngine=require('./config/viewEngine');
require('dotenv').config()
const webRoutes=require('./routes/web')
const connection=require('./config/database')
const app = express()
const port=process.env.PORT || 8888;
app.use(express.json())
app.use(express.urlencoded({extended: true}))

configViewEngine(app)
app.use('/',webRoutes)

connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    // console.log(results); // results contains rows returned by server
  }
);

app.listen(port, ()=>{
  console.log(`Run port ${ 'http://localhost:'+ port}`);
})