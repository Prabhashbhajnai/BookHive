import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        subject: {type: String, required: true},
        papers: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Quespaper",
            }
        ]
    }
);

export const TeacherModel = mongoose.model("Teacher", TeacherSchema);