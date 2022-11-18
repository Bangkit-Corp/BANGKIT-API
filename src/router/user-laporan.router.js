import express from "express";
import LaporanController from "../controller/user-laporan.controller.js";

const router = express.Router();
const controller = new LaporanController();

router.get("/", async (req, res, next) => {
	await controller.getAllLaporan(req, res, next);
});

router.get("/:id", async (req, res, next) => {
	await controller.getLaporanByID(req, res, next);
});

router.post("/", async (req, res, next) => {
	await controller.addLaporan(req, res, next);
});

router.delete("/:id", async (req, res, next) => {
	await controller.deleteLaporanByID(req, res, next);
});

router.put("/:id", async (req, res, next) => {
	await controller.updateLaporanByID(req, res, next);
});

export default router;
