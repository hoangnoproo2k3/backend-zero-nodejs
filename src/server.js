const express = require('express');
const configViewEngine = require('./config/viewEngine');
require('dotenv').config()
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const app = express()
const port = process.env.PORT || 8888;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configViewEngine(app)
app.use('/', webRoutes);
(async () => {
    try {
      await connection();
      app.listen(port, () => {
        console.log(`Run port ${'http://localhost:' + port}`);
      })
    } catch (error) {
      console.log('error: ',error);
    }
  })()
