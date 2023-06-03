import express from "express";
import { deleteUser, logedInUser, registerUser, updateUser, userLogin, users } from '../controllers/userContoller.js'
import { isAdmin, isUser } from "../middlewares/verifyUser.js";
 

const router = express.Router() 

router.get('/me', isUser, logedInUser)
router.delete('/:id',isUser, isAdmin, deleteUser)
router.patch('/:id',isUser, updateUser)
router.get('/all', users)
router.post('/register', registerUser)
router.post('/login', userLogin)



export default router