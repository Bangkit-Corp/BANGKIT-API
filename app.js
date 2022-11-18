import "dotenv/config";
import express from "express";
import passport from "passport";
import morgan from "morgan";

import Mongo from "./src/config/db.connect.js";
import userRouter from "./src/router/user.router.js";
import adminRouter from "./src/router/admin-auth.router.js";
import adminLaporanRouter from "./src/router/admin-laporan.router.js";
import userLaporanRouter from "./src/router/user-laporan.router.js";
import { Redis } from "./src/config/redis.connect.js";
import passp from "./src/middleware/passport.middleware.js";

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(morgan(`[LOG] ipAddr=:remote-addr date=[:date[web]] time=:response-time ms method=:method url=":url" status=":status" `));

app.use(passport.initialize());
passp(passport);

app.get("/", (req, res) => {
	res.status(200).send({
		status: res.statusCode,
		message: `API Aktif`,
	});
});

app.use("/api/user/auth", userRouter);
app.use("/api/admin/auth", adminRouter);
app.use("/api/admin/laporan", passport.authenticate("jwt-admin", { session: false }), adminLaporanRouter);
app.use("/api/user/laporan", passport.authenticate("jwt-user", { session: false }), userLaporanRouter);


/* TEST AUTH USER */
app.get("/secret/user", passport.authenticate("jwt-user", { session: false }), (req, res, next) => {
	res.status(200).send({
		status: res.statusCode,
		message: "Ini Secret User",
	});
});

/* TEST AUTH ADMIN */
app.get("/secret/admin", passport.authenticate("jwt-admin", { session: false }), (req, res, next) => {
	res.status(200).send({
		status: res.statusCode,
		message: "Ini Secret Admin",
	});
});

app.listen(PORT, () => {
	const conn = new Mongo();
	conn.connection();
	const redisConn = new Redis();
	redisConn.connect();
	console.log(`[SERVER] App Listen : http://localhost:${PORT}`);
});
