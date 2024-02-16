import { connectToDatabase } from '@/utils/database/database';
import Hotel from '@/utils/database/models/hotel'

export const POST = async (req) => {
    const { name, addressId, url, phone_number } = await req.json();

    try {
        await connectToDatabase();
        const newHotel = new Hotel({
            name,
            address: addressId,
            url,
            phone_number
        })

        await newHotel.save();

        return new Response(JSON.stringify(newHotel), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new hotel ${error}`, { status: 500})
    }
}