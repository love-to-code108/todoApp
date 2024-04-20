import mongoose from "mongoose";



const todoFileSchema = new mongoose.Schema({
    fileName: String,
    todos: {
        type: [{
            todo: String,
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