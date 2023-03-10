const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.render('employees/index');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/add', (req, res, next) => {
    try {
        res.render('employees/add')
    } catch (err) {
        console.log(err);
        return next();
    }  
})

router.get('/edit', (req, res, next) => {
    try {
        res.render('employees/edit')
    } catch (err) {
        console.log(err);
        return next();
    }  
})

router.get('/:id', (req, res, next) => {
    try {
        res.render('employees/show');
    } catch (err) {
        console.log(err);
        return next();
    }  
})

module.exports = router;