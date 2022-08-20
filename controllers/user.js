const { response } = require('express')


const usersGet = (req, res = response) => {
    res.json({
        message: 'Get Api - Controller'
    })
}

const usersPut = (req, res = response) => {
    res.json({
        message: 'Put users'
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        message: 'Post users'
    })
}

const usersPost = (req, res = response) => {

    const {nombre, edad} = req.body; 

    res.json({
        message: 'Patch users',
        nombre,
        edad
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        message: 'Delete users'
    })
}


module.exports = {
    usersGet,
    usersPut,
    usersPatch,
    usersPost,
    usersDelete
}