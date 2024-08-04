import express from "express";
import {newStore} from "../controllers/marketplace.js"

const router = express.Router()

router.post('/create', newStore)
//router.get('/', viewStore)
//router.put('/:userId/:storeId', editStoreDetails)
//router.delete('/:userId', deleteAccount)

export default router