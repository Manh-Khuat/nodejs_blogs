const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3002;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// gửi dưới dạng form
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// gửi từ code js
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes init
route(app);

// 127.0.0.1
                    app.listen(port, () => {
                    console.log(`Example app listening on port ${port}`);
                });
