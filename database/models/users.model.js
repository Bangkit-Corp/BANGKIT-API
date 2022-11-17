import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		contact: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false }
);

const Users = mongoose.model("user", UsersSchema);
export default Users;
