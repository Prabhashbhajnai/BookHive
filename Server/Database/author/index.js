import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema({
    name: {type: String, required: true},
    about: {type: String},
    books: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Books",
        }
    ]
});

// Creating Book Model
const AuthorModel = mongoose.model("author", AuthorSchema);