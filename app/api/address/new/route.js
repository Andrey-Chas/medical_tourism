import { connectToDatabase } from '@/utils/database/database';
import Address from '@/utils/database/models/address'

export const POST = async (req) => {
    const { city, country } = await req.json();

    try {
        await connectToDatabase();
        const newAddress = new Address({
            city,
            country
        })

        await newAddress.save();

        return new Response(JSON.stringify(newAddress), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new clinic ${error}`, { status: 500})
    }
}