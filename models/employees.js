const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'please provide a name']
        },
        img: {
            type: String,
            required: [true, 'please provide a profile picture']
        },
        age: {
            type: String,
            required: [true, 'please provide an age']
        },
        position: {
            type: String,
            required: [true, 'please provide their position']
        }
    }
)

const Employees = mongoose.model('Employees', employeesSchema);

module.exports = Employees;