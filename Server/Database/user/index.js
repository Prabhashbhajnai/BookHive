import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
    {
        fullname: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String},
    },
    {
        timestamps: true,
    }
);

UserSchema.methods.generateJwtToken = function() {
    return jwt.sign({user: this._id.toString()}, "E-Library");
}

UserSchema.statics.findByEmail = async ({email}) => {
    // check if email exist
    const checkUser = await UserModel.findOne({email});

    if(checkUser) {
        throw new Error("User already exists!!");
    }

    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({email, password}) => {
    // Check if email exist
    const user = await UserModel.findOne({email});
    if(!user) throw new Error("User doesn't exist!!");

    //  Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if(!doesPasswordMatch) throw new Error("Invalid Password!!");

    return user;
};

UserSchema.pre("save", function(next) {
    const user = this;

    // Chacking if password is modified
    if(!user.isModified("password")) return next();

    // generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error) return next(error);

        // hashing the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            // assigning the hashed password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users", UserSchema);