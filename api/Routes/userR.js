const Route = require('express').Router()
const userController = require('../controller/user/user')
const adminController = require('../controller/admin/admin')
Route.post('/register', userController.postUser)

//Admin
Route.post('/adminReg', adminController.postAdmin)
Route.get('/show', adminController.getUser)
Route.post('/delete', adminController.deleteUser)
Route.get('/edit/:id', adminController.getUpdate)
Route.post('/update/:id', adminController.postUpdate)
Route.post('/login',adminController.postAdLog)




module.exports = Route