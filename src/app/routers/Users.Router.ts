import express from 'express';
const router = express.Router();
import UsersController from '../controller/Users.Controller';

router.post('/create', new UsersController().createUsers);
router.get('/userlist', new UsersController().getUsers);
router.get('/usersbyid', new UsersController().getUsersById);
router.put('/updatebyid', new UsersController().updateById);
router.delete('/deletebyid', new UsersController().deleteById);

export default router;
