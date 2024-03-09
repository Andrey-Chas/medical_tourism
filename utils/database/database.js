import mongoose from 'mongoose';
import Address from './models/address';
import Clinic from './models/clinic';
import Destination from './models/destination';
import Hotel from './models/hotel';
import Offer from './models/offer';

// Connection to MongoDB

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: "medical_tourism",
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}