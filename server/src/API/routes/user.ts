import { Router } from 'express';
import { register, login, getAllAdmins } from '../controllers/admins';
import Auth from '../middlewares/auth';

const router = Router();

router.post('/register',Auth, register);
router.post('/login', login);
router.get('/get-all', getAllAdmins);

export default router;
