import { Router } from "express";
import { donateMpesa,donateMpesaQuery,handleDonateCallback } from "../controllers/donation";

const router = Router();

router.post("/mpesa", donateMpesa)
router.post(`/mpesa-callback/${process.env.DONATION_CALLBACK_PATH}`, handleDonateCallback)
router.post(`/mpesa-query`, donateMpesaQuery)


export default router;