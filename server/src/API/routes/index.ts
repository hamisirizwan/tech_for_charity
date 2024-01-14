import { Router } from "express";
import userRoutes from "./users";
import accessRoutes from "./access_control";
import donationRoutes from "./donation";

const router = Router();

router.use("/users", userRoutes);
router.use("/access", accessRoutes);
router.use("/donation", donationRoutes);


export default router;
