require('dotenv').config();
import mongoose, { Schema } from "mongoose";
import { hashSync, compareSync } from "bcrypt-nodejs";
import jwt from 'jsonwebtoken'

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true
        },
        firstName: String,
        lastNAme: String,
        avatar: String,
        password: String,
        email: String
    },
    { timestamps: true }
);

UserSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    return next();
});

UserSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password)
    },
    createToken() {
        return jwt.sign(
            { _id: this._id },
            process.env.JWT_SECRET,
            { expiresIn: '30m' }
          )
    }
};

export default mongoose.model("User", UserSchema);

