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

router.get('/:id', async (req, res, next) => {
    try {
        const employeeShow = await Employees.findById(req.params.id);
        res.render('employees/show', {employee: employeeShow});
    } catch (err) {
        console.log(err);
        return next();
    }  
})



router.get('/:id/edit',  async (req, res, next) => {
    try {
        const employeeEdit = await Employees.findById(req.params.id);
        res.render('employees/edit', {employee: employeeEdit});
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.post('/new', async(req, res, next) => {
    try {
        const newEmployee = await Employees.create(req.body);
        res.redirect('/employees');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updateEmployee = await Employees.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/employees/${req.params.id}`);
    } catch (err) {
        console.log(err); 
        return next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleteEmployee = await Employees.findByIdAndDelete(req.params.id)
        res.redirect('/employees')
    } catch (err) {
        console.log(err);
        return next();
    }
})

module.exports = router;