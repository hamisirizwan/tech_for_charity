import { Router } from 'express';
import userRoutes from './user';
import memberRoutes from './user';

const router = Router();

router.use('/users', userRoutes);
router.use('/members', memberRoutes);

export default router;
