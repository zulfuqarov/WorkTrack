import express from "express";
import Auth from "./router/Auth.js";
import WorkTrack from "./router/WorkTrack.js";

const router = express.Router();

router.use('/auth', Auth);
router.use('/workTrack', WorkTrack);


export default router;