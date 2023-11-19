import { Router } from 'express';

import Auth from '../middlewares/auth';
import { approveMember, getAllMembers, sendJoiningRequest } from '../controllers/members';

const router = Router();

router.post('/joining-request', sendJoiningRequest);
router.put('/approve',Auth, approveMember);
router.get('/get-all', getAllMembers);


export default router;
