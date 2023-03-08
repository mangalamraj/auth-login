import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    phonenumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    }
});

const user = mongoose.model('userwa',userSchema);
export default user;