import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
})

const User = models.User || model('User', UserSchema);

export default User;