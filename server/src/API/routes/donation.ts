import { Router } from "express";
import { donateMpesa } from "../controllers/donation";

const router = Router();

router.post("/mpesa", donateMpesa)

export default router;