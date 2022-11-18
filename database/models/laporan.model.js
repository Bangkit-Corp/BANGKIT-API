import mongoose from 'mongoose';
const { Schema } = mongoose;

const laporanSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    kuota: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.ObjectId,
        required: true,
        ref: "admin"        
    }
});

const Laporan = mongoose.model("Laporan", laporanSchema);
export default Laporan;


