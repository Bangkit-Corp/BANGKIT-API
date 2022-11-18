import express from "express";
import BeasiswaController from "../controller/beasiswa-admin.controller.js";

const router = express.Router();
const controller = new BeasiswaController();

router.post("/", async(req, res, next) =>{
    await controller.createBeasiswa(req, res, next)
})

router.get("/", async(req, res, next) => {
    await controller.readAllBeasiswa(req, res, next)
})

router.get("/:_id", async(req, res, next) =>{
    await controller.readOneBeasiswa(req, res, next)
})

router.put("/:_id", async(req, res, next) => {
    await controller.updateBeasiswa(req, res, next)
})

router.delete("/:_id", async(req, res, next) => {
    await controller.deleteBeasiswa(req, res, next)
})

export default router;