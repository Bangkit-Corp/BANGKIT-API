import Laporan from "../../database/models/laporan.model.js";
import mongoose from "mongoose";

export default class LaporanAdmin {
	constructor() {}

	async getAllLaporan(req, res, next) {
		try {
			const laporan = await Laporan.find();
			if (laporan) {
				return res.status(200).send({
					status: res.statusCode,
					message: `Success Get All Laporan Data`,
					data: laporan,
				});
			} else {
				return res.status(404).send({
					status: res.statusCode,
					message: `Data Laporan Tidak Ditemukan`,
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
					message: `Success Get Laporan Data`,
					data: laporan,
				});
			} else {
				return res.status(404).send({
					status: res.statusCode,
					message: `Data Laporan Tidak Ditemukan`,
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}

	async addLaporan(req, res, next) {
		try {
			const { title, desc, contact, status } = req.body;
			if (!title || !desc || !contact || !status) {
				return res.status(400).send({ status: res.statusCode, message: `Bad Request! Input Body!` });
			}

			const data = { title, desc, contact, status, user: { email: req.user.email, contact: req.user.contact } };
			const laporan = await Laporan.create(data);

			return res.status(200).send({
				status: res.statusCode,
				message: `Laporan Successfully Created`,
				data: laporan,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}

	async deleteLaporanByID(req, res, next) {
		try {
			const params = req.params;
			const laporan = await Laporan.findOneAndDelete({ _id: mongoose.Types.ObjectId(params) });

			if (laporan) {
				return res.status(202).send({
					status: res.statusCode,
					message: `Successfully Deleted Laporan`,
				});
			} else {
				return res.status(404).send({
					status: res.statusCode,
					message: `Data Laporan Tidak Ditemukan`,
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}

	async updateLaporanByID(req, res, next) {
		try {
			const params = req.params;
			const data = req.body;

			if (!data) {
				res.send({
					message: "Masukkan Semua Data",
				});
			}

			const laporanOld = await Laporan.findOne({ _id: mongoose.Types.ObjectId(params) });
			const laporan = await Laporan.findOneAndUpdate({ _id: mongoose.Types.ObjectId(params) }, data, { new: true });

			if (laporan) {
				return res.status(200).send({
					status: res.statusCode,
					message: `Success Update Laporan`,
					old_data: laporanOld,
					new_data: laporan,
				});
			} else {
				return res.status(404).send({
					status: res.statusCode,
					message: `Data Laporan Tidak Ditemukan`,
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}
}
