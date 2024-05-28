import express from 'express';
import { deleteUser, followUser, getUser, UnFollowUser, updateUserByUsername } from '../Controllers/UserController.js';

const router = express.Router();

 router.get('/:id', getUser)
  router.put('/update/:username', updateUserByUsername); //put for updation
 router.delete('/delete/:username', deleteUser);
 router.put('/:id/follow', followUser)
 router.put('/:id/unfollow', UnFollowUser)

export default router;