import mongoose from "mongoose";



const todoFileSchema = new mongoose.Schema({
    fileName: String,
    todos: {
        type: [{
            value: String,
            Status: Boolean,
        }]
    }

})

const UserSchema = new mongoose.Schema({
    UserName: String,
    Password: String,
    Email: String,
    Cookie: String,
    todoFiles: {
        type: [todoFileSchema],
    },
})

export default mongoose.model('user', UserSchema);