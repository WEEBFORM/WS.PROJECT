import express from "express";
import {viewProfile, editProfile, deleteAccount} from "../controllers/Users/user.js"

const router = express.Router()

router.get('/:userId', viewProfile)
router.put('/:userId', editProfile)
router.delete('/:userId', deleteAccount)

export default router