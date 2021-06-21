import express from 'express';
const router = express.Router();
import AuthController from '../controller/AuthController';

router.get("/signup", AuthController.signUp);

export default router;
