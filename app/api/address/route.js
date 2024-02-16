import { connectToDatabase } from '@/utils/database/database';
import Address from '@/utils/database/models/address';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const addresses = await Address.find({});

        return new Response(JSON.stringify(addresses), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all addresses ${error}`, { status: 500 })
    }
}