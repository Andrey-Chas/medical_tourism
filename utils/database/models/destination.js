import { Schema, model, models } from 'mongoose';

const DestinationSchema = new Schema({
    name: { type: String, required: true },
    address: { type: Schema.Types.ObjectId, ref: "Address" }
})

const Destination = models.Destination || model('Destination', DestinationSchema);

export default Destination;