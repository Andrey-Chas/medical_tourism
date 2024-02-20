import { connectToDatabase } from '@/utils/database/database';
import Destination from '@/utils/database/models/destination'

export const POST = async (req) => {
    const { name, addressId } = await req.json();

    try {
        await connectToDatabase();
        const newDestination = new Destination({
            name,
            address: addressId
        })

        await newDestination.save();

        return new Response(JSON.stringify(newDestination), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new destination ${error}`, { status: 500})
    }
}