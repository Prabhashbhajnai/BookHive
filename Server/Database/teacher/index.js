import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        subject: {type: String, required: true},
        designation: {type: String},
        photo: {type: String},
        midesem: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Midsem",
            },
        ],
        termend: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Termend",
            }
        ]
    }
);

export const TeacherModel = mongoose.model("Teacher", TeacherSchema);