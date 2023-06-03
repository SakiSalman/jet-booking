import express from "express";
import { activeAccount, deleteUser, logedInUser, registerUser, updateUser, userLogin, users } from '../controllers/userContoller.js'
import { isAdmin, isUser } from "../middlewares/verifyUser.js";
 

const router = express.Router() 

// loged in route
router.get('/me', isUser, logedInUser)
// delete rute
router.delete('/:id',isUser, isAdmin, deleteUser)
// verify acount
router.post('/active',activeAccount)
// update user
router.patch('/:id',isUser, updateUser)
// get all user
router.get('/all', users)
// register user
router.post('/register', registerUser)
// login user
router.post('/login', userLogin)



export default router