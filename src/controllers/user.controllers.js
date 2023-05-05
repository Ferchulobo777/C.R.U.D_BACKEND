const catchError = require('../utils/catchError');
const User = require('../models/User');
const { where } = require('sequelize');

const getAll = catchError(async(req, res) => {
    const user = await User.findAll()
    return res.status(201).json(user)
});

const create = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday} = req.body;
    const user = await User.create({ 
        first_name, 
        last_name, 
        email, 
        password, 
        birthday
    });
    return res.status(201).json(user)
})

const getUserId = catchError(async(req, res) => {
    const { id } = req.params;
    const car = await User.findByPk(id);
    return res.json(car)
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({where: {id} });
    return res.sendStatus(204);
})

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday} = req.body;
    const user = await User.update({ first_name, last_name, email, password, birthday}, {where: { id }, returning: true });
    return res.json(user)
})


module.exports = {
    getAll, 
    create,
    getUserId,
    remove,
    update
}