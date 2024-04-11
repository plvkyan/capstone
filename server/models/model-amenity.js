import mongoose from "mongoose";

const AmenitiesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
        },
        reason: {
            type: String,
        },
        approved: {
            type: Boolean,
            default: false
        },
        date: [{ unavailableDates: { type: [Date] } }],
    },
    { timestamps: true }
);

export default mongoose.model("Amenity", AmenitiesSchema)