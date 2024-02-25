import { connectToDatabase } from '@/utils/database/database';
import Address from '@/utils/database/models/address';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const address = await Address.findById(params.id);

        if(!address) return new Response("Address not found", { status: 404 });

        return new Response(JSON.stringify(address), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch address ${error}`, { status: 500});
    }
}