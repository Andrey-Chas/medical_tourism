import { Schema, model, models } from 'mongoose';

const ClinicSchema = new Schema({
    name: { type: String, required: true },
    specialisation: { type: String, required: true },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
    url: { type: String, required: true },
    phone_number: { type: Number }
})

const Clinic = models.Clinic || model('Clinic', ClinicSchema);

export default Clinic;