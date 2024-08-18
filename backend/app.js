const express = require('express');
const app = express();
const errorMiddleware = require('./Middlewares/error');
//const cookieParser = require('cookie-parser')

const path = require('path')
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use(express.json());
//app.use(cookieParser());
//app.use('/uploads', express.static(path.join(__dirname,'uploads') ) )


//onst cinedatas = require('./routes/cineDatas')
const auth = require('./routes/auth')
//const contactus = require('./routes/contact')


//app.use('/api/v1/',cinedatas);
app.use('/api/v1/',auth);
//app.use('/api/v1/',contactus);

// Serve static files for production build and handle the root URL
//if (process.env.NODE_ENV === 'production') {
  //  app.use(express.static(path.join(__dirname, '../frontend/build')));
//}

// Handle all other routes by serving the frontend's index.html
//app.get('*', (req, res) => {
  //  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
//});

app.use(errorMiddleware)
module.exports = app;
