const { response, request } = require('express')


const usersGet = (req = request, res = response) => {

    const {name = "no name", page=1, limit=10, apikey } = req.query;

    res.json({
        message: 'Get Api - Controller',
        name,
        page,
        limit,
        apikey
    })
}

const usersPut = (req , res = response) => {

    const id = req.params.id
    res.json({
        message: 'Put users',
        id
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