import { Strategy } from "passport-local";
import passportJWT from "passport-jwt";
import sign from "jwt-encode";

import { getHashedPassword } from "../../lib/crypto.js";
import Users from "../../database/models/users.model.js";
import { client } from "../config/redis.connect.js";
import Admins from "../../database/models/admins.model.js";

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

export default function (passport) {
	passport.use(
		"local-user",
		new Strategy(
			{
				usernameField: "email",
				passwordField: "password",
			},
			async (email, password, cb) => {
				const hashed = getHashedPassword(password);
				return Users.findOne({ email, password: hashed })
					.then(async (user) => {
						if (!user) {
							return cb(null, false, {
								message: "Incorrect email or password.",
							});
						} else {
							return cb(null, user, {
								message: "Logged In Successfully",
							});
						}
					})
					.catch((err) => {
						console.log(err);
						cb(err);
					});
			}
		)
	);

	passport.use(
		"local-admin",
		new Strategy(
			{
				usernameField: "email",
				passwordField: "password",
			},
			async (email, password, cb) => {
				const hashed = getHashedPassword(password);
				return Admins.findOne({ email, password: hashed })
					.then(async (admin) => {
						if (!admin) {
							return cb(null, false, {
								message: "Incorrect email or password.",
							});
						} else {
							return cb(null, admin, {
								message: "Logged In Successfully",
							});
						}
					})
					.catch((err) => {
						console.log(err);
						cb(err);
					});
			}
		)
	);

	passport.use(
		"jwt-user",
		new JWTStrategy(
			{
				jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
				secretOrKey: process.env.JWT_KEY,
			},
			async (jwtPayload, cb) => {
				const token = sign(jwtPayload, process.env.JWT_KEY);
				const inBlackList = await client.get(`jwt_bl_${token}`);
				return Users.findOne({ _id: jwtPayload._id })
					.then(async (user) => {
						if (!user) {
							return cb(null, false);
						}
						if (inBlackList) {
							return cb(null, false);
						}
						return cb(null, user);
					})
					.catch((err) => {
						console.log(err);
						return cb(err);
					});
			}
		)
	);

	passport.use(
		"jwt-admin",
		new JWTStrategy(
			{
				jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
				secretOrKey: process.env.JWT_KEY,
			},
			async (jwtPayload, cb) => {
				const token = sign(jwtPayload, process.env.JWT_KEY);
				const inBlackList = await client.get(`jwt_bl_${token}`);
				return Admins.findOne({ _id: jwtPayload._id })
					.then(async (admin) => {
						if (!admin) {
							return cb(null, false);
						}
						if (inBlackList) {
							return cb(null, false);
						}
						return cb(null, admin);
					})
					.catch((err) => {
						console.log(err);
						return cb(err);
					});
			}
		)
	);
}
