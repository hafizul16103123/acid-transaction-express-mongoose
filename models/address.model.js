import mongoose from "mongoose";
const schema = new mongoose.Schema({ address: 'string',postCode:{type:Number,required:true},user_id:'string' });
const ShippingAddress = mongoose.model('ShippingAddress', schema);
export default ShippingAddress