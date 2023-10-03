const express = require('express');
const configViewEngine = require('./config/viewEngine');
require('dotenv').config()

const webRoutes = require('./routes/web')
const apiRouter = require('./routes/api')
const fileUpload = require('express-fileupload');
const connection = require('./config/database')
const app = express()
const port = process.env.PORT || 8888;
// config file upload
app.use(fileUpload());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configViewEngine(app)
app.use('/', webRoutes);
app.use('/v1/api/', apiRouter);
(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Run port ${'http://localhost:' + port}`);
    })
  } catch (error) {
    console.log('error: ', error);
  }
})()
