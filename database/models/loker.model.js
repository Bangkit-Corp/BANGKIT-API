import mongoose from 'mongoose';
const { Schema } = mongoose;

const lokerSchema = new Schema({
    name: String,
    desc: String,
    contact: String,
    image: String,
    user: {
        type: mongoose.ObjectId,
        ref: "admin"
        // mongoose.model(name, schema)
        // pake name ini
        // const Admins = mongoose.model("admin", AdminsSchema);
    }
});

const Loker = mongoose.model("Loker", lokerSchema);
export default Loker;