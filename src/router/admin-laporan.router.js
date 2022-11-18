import express from "express";
import LaporanController from "../controller/admin-laporan.controller.js";

const router = express.Router();
const controller = new LaporanController();

router.get("/", async (req, res, next) => {
	await controller.getAllLaporan(req, res, next);
});

router.get("/:id", async (req, res, next) => {
	await controller.getLaporanByID(req, res, next);
});

export default router;
