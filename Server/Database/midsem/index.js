import mongoose from "mongoose";

const MidsemSchema = new mongoose.Schema(
    {
        teacher: { type: String, required: true },
        subject: { type: String, required: true },
        paper: [
            {
                items: [
                    {
                        type: mongoose.Types.ObjectId,
                        ref: "Quespaper",
                    },
                ],
            },
        ],

    },
    {
        timestamps: true,
    }
);

export const MidsemModel = mongoose.model("Midsem", MidsemSchema);