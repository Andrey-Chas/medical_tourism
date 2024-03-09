import { connectToDatabase } from '@/utils/database/database';
import Offer from '@/utils/database/models/offer';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const offer = await Offer.findById(params.id).populate("clinic").populate("hotel").populate("address").populate("destination");

        if (!offer) return new Response("Offer not found", { status: 404 });

        return new Response(JSON.stringify(offer), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch offer ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { name, clinicId, hotelId, addressId, destinationId, description, rating } = await request.json();

    try {
        await connectToDatabase();

        const existingOffer = await Offer.findById(params.id);

        if (!existingOffer) return new Response("Offer not found", { status: 404 });

        existingOffer.name = name;
        existingOffer.clinic = clinicId;
        existingOffer.hotel = hotelId;
        existingOffer.address = addressId;
        existingOffer.destination = destinationId;
        existingOffer.description = description;
        existingOffer.rating = rating;

        existingOffer.save();

        return new Response(JSON.stringify(existingOffer), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update offer ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Offer.findByIdAndDelete(params.id);

        return new Response("Offer deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete offer ${error}`, { status: 500 });
    }
}
