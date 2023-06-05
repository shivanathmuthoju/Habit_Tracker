const express = require('express')

const app = express();
const port = 8000;
const path = require('path');

const db = require('./config/mongoose')

app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})

app.use('/', require('./routes/index'))