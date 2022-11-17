import express from "express";
import passport from "passport";
import UserController from "../controller/user.controller.js";

const router = express.Router();
const controller = new UserController();

router.post("/register", async (req, res, next) => {
	await controller.registerUser(req, res, next);
});

router.post("/login", async (req, res, next) => {
	await controller.loginUsers(req, res, next);
});

router.get("/logout", passport.authenticate("jwt-user", { session: false }), async (req, res, next) => {
	await controller.logoutUser(req, res, next);
});

export default router;
