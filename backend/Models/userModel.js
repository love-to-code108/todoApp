import mongoose from "mongoose";



const todoFileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        default: "File Name 1",
    },
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
        default: [
            {
                fileName : "File 1",
                todos: [{
                    value: "First todo",
                    Status: false,
                }]
            },
            {
                fileName: "File 2",
            }
        ]
    },
})

export default mongoose.model('user', UserSchema);