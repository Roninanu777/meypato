import { signUp, verifyOtp } from "../controller/index.js";

import { Router } from "express";
const router = Router();

router.route("/signup").post(signUp);

router.route("/verify").post(verifyOtp);

export default router;
