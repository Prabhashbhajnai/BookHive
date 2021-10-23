import mongoose from "mongoose";

// Creating author Schema
const PublicationSchema = mongoose.Schema({
    name: {type: String, required: true},
    books: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Books",
        }
    ]
});

export const PublicationModel = mongoose.model("Publication", PublicationSchema);