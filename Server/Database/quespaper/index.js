import mongoose from "mongoose";

const QuespaperSchema = new mongoose.Schema(
    {
        subject: {type: String, required: true},
        teacher: {type: String, requires: true},
        date: {type: String, required: true},
        type: {type: String, required: true},
        location: {type: String, required: true},
    }
);

export const QuespaperModel = mongoose.model("Quespaper", QuespaperSchema);