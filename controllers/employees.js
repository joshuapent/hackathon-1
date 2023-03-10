const express = require('express');
const router = express.Router();
const {Employees} = require('../models')
const employeeSeed = require('../models/seed.js')


router.get('/', async (req, res, next) => {
    try {
        const myEmployee = await Employees.find({})
        console.log(myEmployee)
        res.render('employees/index', {employee: myEmployee});
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/seed', async (req, res, next) => {
    try {
        const removeAll = await Employees.deleteMany({});
        const seedAll = await Employees.insertMany(employeeSeed);
        console.log(employeeSeed)
        res.redirect('/employees')
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