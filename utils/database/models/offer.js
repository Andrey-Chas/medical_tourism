import { Schema, model, models } from 'mongoose';

const OfferSchema = new Schema({
    name: { type: String, required: true },
    clinic: { type: Schema.Types.ObjectId, ref: "Clinic" },
    hotel: { type: Schema.Types.ObjectId, ref: "Hotel" },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
    destination: { type: Schema.Types.ObjectId, ref: "Destination" },
    description: { type: String },
    comment: { type: [String] },
    rating: { type: Number }
})

const Offer = models.Offer || model('Offer', OfferSchema);

export default Offer;