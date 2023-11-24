import { Router } from 'express';

import Auth from '../middlewares/auth';
import { addMember, approveMember, getAllAdmins, getAllMembers, login, sendJoiningRequest } from '../controllers/users';
import checkPermissions from '../middlewares/checkPermission';


const router = Router();

router.post("/login", login)
router.post('/joining-request', sendJoiningRequest);
router.put('/approve/:id',Auth, checkPermissions("APPROVE_USER:USERS"),approveMember);
router.get('/get-all',Auth,checkPermissions("VIEW_USERS:USERS"),getAllMembers);
router.get("/get-all-admins", Auth,checkPermissions("VIEW_USERS:USERS"), getAllAdmins)
router.post("/add-member", Auth, checkPermissions("CREATE_USER:USERS"), addMember)


export default router;
