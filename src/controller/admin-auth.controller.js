import passport from "passport";
import jwt from "jsonwebtoken";
import Admins from "../../database/models/admins.model.js";
import { getHashedPassword } from "../../lib/crypto.js";
import { client } from "../config/redis.connect.js";

export default class AuthAdmin {
	constructor() {}

	async registerAdmin(req, res, next) {
		try {
			const { email, password, confirmPassword } = req.body;
			if (!email || !password || !confirmPassword) {
				return res.status(400).send({ status: res.statusCode, message: `Bad Request! Input Body!` });
			}
			const data = await Admins.findOne({ email });
			if (data) {
				return res.status(400).send({
					status: res.statusCode,
					message: `Email Sudah Pernah Terdaftar!`,
				});
			} else {
				if (password.length >= 6) {
					if (password == confirmPassword) {
						const hash = getHashedPassword(password);
						await Admins.create({ email, password: hash });
						return res.status(200).send({
							status: res.statusCode,
							message: `Succes Create Account Email : ${email}`,
						});
					} else {
						return res.status(400).send({
							status: res.statusCode,
							message: `Password Tidak Sama!`,
						});
					}
				} else {
					return res.status(400).send({
						status: res.statusCode,
						message: `Password Harus Lebih Dari 6 Karakter!`,
					});
				}
			}
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}

	async loginAdmin(req, res, next) {
		try {
			passport.authenticate("local-admin", { session: false }, (err, admin, info) => {
				if (err || !admin) {
					console.log(err);
					return res.status(400).json({
						status: res.statusCode,
						message: info.message,
					});
				}
				req.login(admin, { session: false }, async (err) => {
					if (err) {
						console.log(err);
						res.send(err);
					}
					let adminData = admin.toObject();
					const token = jwt.sign({ _id: adminData._id }, process.env.JWT_KEY, {
						expiresIn: process.env.expiredJWT,
					});
					return res.status(200).send({
						status: res.statusCode,
						message: info.message,
						token,
					});
				});
			})(req, res, next);
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}

	async logoutAdmin(req, res, next) {
		try {
			let token = req.headers.authorization.split(" ")[1];
			let token_object = jwt.verify(token, process.env.JWT_KEY);
			await client.set(`jwt_bl_${token}`, token);
			client.expireAt(`jwt_bl_${token}`, token_object.exp);
			return res.status(200).send({
				status: res.statusCode,
				message: `Logout Sukses, Token invalidated`,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
		}
	}
}
