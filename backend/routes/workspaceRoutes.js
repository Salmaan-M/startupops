import express from "express";
import { createWorkspace,getMyWorkspaces } from "../controllers/workspaceController.js";
import {protect } from "../middleware/authMiddleware.js";

const router =express.Router();

router.route("/")
   .post(protect, createWorkspace)
   .get(protect, getMyWorkspaces);

export default router;