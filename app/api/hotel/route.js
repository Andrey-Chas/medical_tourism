import { connectToDatabase } from '@/utils/database/database';
import Hotel from '@/utils/database/models/hotel';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const hotels = await Hotel.find({}).populate("address");

        return new Response(JSON.stringify(hotels), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all hotels ${error}`, { status: 500 })
    }
}