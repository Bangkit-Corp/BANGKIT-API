import mongoose from "mongoose";
const { Schema } = mongoose;

const laporanSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	user: {
		type: Object,
		required: true,
	},
});

const Laporan = mongoose.model("Laporan", laporanSchema);
export default Laporan;
