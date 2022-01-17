import express from 'express';
import { getUsers, createUsers } from '../controllers/posts.js';

const router = express.Router();

//localhost:5000/posts
router.get('/', getUsers);
router.post('/', createUsers);

export default router;