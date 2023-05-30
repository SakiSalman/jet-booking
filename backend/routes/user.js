import express from "express";
import { registerUser, users } from '../controllers/userContoller.js'


const router = express.Router() 

router.get('/all', users)
router.post('/register', registerUser)



export default router