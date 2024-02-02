import express from "express";
import {addStory, viewStory, deleteStory} from "../controllers/stories.js"

const router = express.Router()

router.post('/', addStory)
router.get('/', viewStory)
router.delete('/:storyId', deleteStory)


export default router