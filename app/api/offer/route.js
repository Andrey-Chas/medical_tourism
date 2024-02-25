import { connectToDatabase } from '@/utils/database/database';
import Offer from '@/utils/database/models/offer';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const offers = await Offer.find({}).populate("clinic").populate("hotel").populate("address").populate("destination");

        return new Response(JSON.stringify(offers), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all clinics ${error}`, { status: 500 })
    }
}