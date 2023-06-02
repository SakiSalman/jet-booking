import express from "express";
import { registerJet } from "../controllers/jetControllers.js";


const router = express.Router() 

router.post('/register', registerJet)



export default router