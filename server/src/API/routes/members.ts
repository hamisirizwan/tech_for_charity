import { Router } from 'express';

import Auth from '../middlewares/auth';
import { approveMember, sendJoiningRequest } from '../controllers/members';

const router = Router();

router.post('/joining-request', sendJoiningRequest);
router.put('/approve',Auth, approveMember);
router.get('/get-all',Auth, sendJoiningRequest);


export default router;
