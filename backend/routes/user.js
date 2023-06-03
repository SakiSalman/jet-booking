import express from "express";
import { logedInUser, registerUser, userLogin, users } from '../controllers/userContoller.js'
import { verifyUser } from "../middlewares/verifyUser.js";
 

const router = express.Router() 

router.get('/me', verifyUser, logedInUser)
router.get('/all', users)
router.post('/register', registerUser)
router.post('/login', userLogin)



export default router