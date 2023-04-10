import mongoose from 'mongoose';



const TokenSchema = new mongoose.Schema({
    refreshToken: {type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
})

const tokenModel = mongoose.model('Token', TokenSchema);

export default tokenModel;