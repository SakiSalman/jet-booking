import express from "express";
import { deleteJet, registerJet, updateJet } from "../controllers/jetControllers.js";
import { isAdmin, isUser } from "../middlewares/verifyUser.js";


const router = express.Router() 

router.post('/register', registerJet)
router.delete('/:id',isUser, isAdmin, deleteJet)
router.patch('/:id',isUser, updateJet)


export default router