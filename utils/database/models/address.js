import { Schema, model, models } from 'mongoose';

const AddressSchema = new Schema({
    city: { type: String, required: true },
    country: { type: String, required: true }
})

const Address = models.Address || model('Address', AddressSchema);

export default Address;