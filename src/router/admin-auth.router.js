import express from "express";
import passport from "passport";
import AuthAdmin from "../controller/admin-auth.controller.js";

const router = express.Router();
const controller = new AuthAdmin();

router.post("/register", async (req, res, next) => {
	await controller.registerAdmin(req, res, next);
});

router.post("/login", async (req, res, next) => {
	await controller.loginAdmin(req, res, next);
});

router.get("/logout", passport.authenticate("jwt-admin", { session: false }), async (req, res, next) => {
	await controller.logoutAdmin(req, res, next);
});

export default router;
