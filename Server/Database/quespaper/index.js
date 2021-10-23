import mongoose from "mongoose";

const QuespaperSchema = new mongoose.Schema(
    {
        subject: {type: String, required: true},
        teacher: {type: String, requires: true},
        exam: {type: String, required: true},
        semester: {type: String, required: true},
        location: {type: String, required: true},
    }
);

export const QuespaperModel = mongoose.model("Quespaper", QuespaperSchema);