import { Router } from 'express';

import Auth from '../middlewares/auth';
import { approveMember, getAllAdmins, getAllMembers, login, sendJoiningRequest } from '../controllers/users';
import checkPermissions from '../middlewares/checkPermission';


const router = Router();

router.post("/login", login)
router.post('/joining-request', sendJoiningRequest);
router.put('/approve/:id',Auth, checkPermissions("APPROVE_USER:USERS"),approveMember);
router.get('/get-all', getAllMembers);
router.get("/get-all-admins", getAllAdmins)


export default router;