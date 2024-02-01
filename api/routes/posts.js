import express from "express";
import {newPost, allPosts, followingPosts, userPosts, deletePost} from "../controllers/posts.js"

const router = express.Router()

router.post('/', newPost)
router.get('/:category', allPosts)
router.get('/', followingPosts)
router.get('/users/:id', userPosts)
router.delete('/:id', deletePost)


export default router