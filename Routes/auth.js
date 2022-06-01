const express = require('express');
const User = require ('../Models/user')
const route = express.Router ()
const {getUser ,deleteUser , updateUser , addUser } = require ('../Controllers/dataController')

route.get('/Contact',getUser)

route.delete('/Contact/:id', deleteUser )



route.put('/Contact/:id',updateUser)


route.post('/Contact', addUser )







module.exports = route