import express from "express";
import { registerUser, userLogin, users } from '../controllers/userContoller.js'


const router = express.Router() 

router.get('/all', users)
router.post('/register', registerUser)
router.post('/login', userLogin)



export default router