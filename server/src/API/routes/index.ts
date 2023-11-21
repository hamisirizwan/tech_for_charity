import { Router } from 'express';
import userRoutes from './users';
import accessRoutes from './access_control';

const router = Router();

router.use('/users', userRoutes);
router.use('/access', accessRoutes);

export default router;
