import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    blockLot: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
}, 
{ timestamps: true }
);

export default mongoose.model("User", UserSchema);