import { Schema, model, models } from 'mongoose';

const HotelSchema = new Schema({
    name: { type: String, required: true },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
    url: { type: String, required: true },
    phone_number: { type: Number }
})

const Hotel = models.Hotel || model("Hotel", HotelSchema);

export default Hotel;