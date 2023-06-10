import express from "express";
import { activeAccount, deleteUser, getSingelUser, logedInUser, registerUser, resetAccount, resetPassword, updateUser, userLogin, users } from '../controllers/userContoller.js'
import { isAdmin, isUser } from "../middlewares/verifyUser.js";
 

const router = express.Router() 
// get all user
router.get('/all', users)
// loged in route
router.get('/me', isUser, logedInUser)
// delete rute
router.delete('/:id',isUser, isAdmin, deleteUser)
// get all user
router.get('/:id', getSingelUser)
// verify acount
router.post('/active',activeAccount)
// forgot password
router.post('/forgot-password', resetAccount)
// reset password
router.post('/reset-password/:token', resetPassword)
// update user
router.patch('/:id',isUser, updateUser)
// register user
router.post('/register', registerUser)
// login user
router.post('/login', userLogin)



export default router