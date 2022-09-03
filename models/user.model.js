import mongoose from "mongoose";

const schema = new mongoose.Schema({ name: 'string' });
const User = mongoose.model('User', schema);
export default User