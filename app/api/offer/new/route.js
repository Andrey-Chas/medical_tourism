import { connectToDatabase } from '@/utils/database/database';
import Offer from '@/utils/database/models/offer'

export const POST = async (req) => {
    const { name, clinicId, hotelId, addressId, destinationId, description, rating } = await req.json();

    try {
        await connectToDatabase();
        const newOffer = new Offer({
            name,
            clinic: clinicId,
            hotel: hotelId,
            address: addressId,
            destination: destinationId,
            description,
            rating
        })

        await newOffer.save();

        return new Response(JSON.stringify(newOffer), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new offer ${error}`, { status: 500})
    }
}