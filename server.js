const express = require('express');
const app = express();
const employeesController = require('./controllers/employees.js')

const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use('/employees', employeesController)

app.get('/', (req, res, next) => {
    try {
        res.render('main');
    } catch(err) {
        console.log(err);
        return next();
    }
})

app.get('/*', (req, res, next) => {
    try {
        res.render('404')
    } catch(err) {
        console.log(err);
        return next();
    }
})

app.listen('4000', () => {
    console.log('Listening on port 4000')
})