import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const router = express.Router();
import {createUser,getUser,getUsers,deleteUser,updateUser} from '../controllers/user.js'


// all routes in here are already starting by /users, as specified in index.js file, we are calling userRoutes('/users')
router.get('/',getUsers)

router.get('/:id',getUser);

router.post('/',createUser);

router.delete('/:id',deleteUser);

// patch is used to update only a part of the data, put is used to over write data completely
router.patch('/:id',updateUser);

export default router;