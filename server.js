const express = require('express');
const app = express();

const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));


app.listen('4000', () => {
    console.log('Listening on port 4000')
})