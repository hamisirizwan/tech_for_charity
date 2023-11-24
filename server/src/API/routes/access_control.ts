import { Router } from 'express';

import Auth from '../middlewares/auth';
import checkPermissions from '../middlewares/checkPermission';
import { getAllRoles, getSystemPermissions,createRole, assignUserRole} from '../controllers/access_control';


const router = Router();

router.get("/get-permissions", Auth, checkPermissions("CREATE_ROLE:USER_ACCESS"), getSystemPermissions)
router.get("/get-roles", Auth, checkPermissions("READ_ROLES:USER_ACCESS"), getAllRoles)
router.post("/create-role", Auth, checkPermissions("CREATE_ROLE:USER_ACCESS"),createRole )
router.post("/assign-role", Auth, checkPermissions("ASSIGN_ROLE:USER_ACCESS"),assignUserRole )

export default router