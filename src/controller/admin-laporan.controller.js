import Laporan from "../../database/models/laporan.model.js";
import mongoose from "mongoose";

export default class LaporanAdmin {
	constructor() {}

	async getAllLaporan(req, res, next) {
		try {
			const laporan = await Laporan.find().populate("user", "email");
			if (laporan) {
				return res.status(200).send({
					status: res.statusCode,
					message: `Success Mendapatkan Data Laporan`,
					data: laporan,
				});
			} else {
				return res.status(404).send({
					status: res.statusCode,
					message: `Laporan Tidak Ditemukan`,
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}

	async getLaporanByID(req, res, next) {
		try {
			const params = req.params;
			const laporan = await Laporan.findOne({ _id: mongoose.Types.ObjectId(params) });

			if (laporan) {
				return res.status(200).send({
					status: res.statusCode,
					message: `Success Mendapatkan Data Laporan`,
					data: laporan,
				});
			} else {
				return res.status(404).send({
					status: res.statusCode,
					message: `Laporan Tidak Ditemukan`,
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}
}
