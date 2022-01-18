import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    DoB: Date,
    organization: String,
    organizationType: String,
    profilePhotoFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const postUser = mongoose.model('postUser', userSchema);

export default postUser;