import { connectToDatabase } from '@/utils/database/database';
import Destination from '@/utils/database/models/destination';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const destinations = await Destination.find({}).populate("address");

        return new Response(JSON.stringify(destinations), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all destinations ${error}`, { status: 500 })
    }
}