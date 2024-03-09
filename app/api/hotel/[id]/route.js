import { connectToDatabase } from '@/utils/database/database';
import Hotel from '@/utils/database/models/hotel';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const hotel = await Hotel.findById(params.id).populate("address");

        if (!hotel) return new Response("Hotel not found", { status: 404 });

        return new Response(JSON.stringify(hotel), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch hotel ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { name, addressId, url, phone_number } = await request.json();

    try {
        await connectToDatabase();

        const existingHotel = await Hotel.findById(params.id);

        if (!existingHotel) return new Response("Hotel not found", { status: 404 });

        existingHotel.name = name;
        existingHotel.address = addressId;
        existingHotel.url = url;
        existingHotel.phone_number = phone_number;

        existingHotel.save();

        return new Response(JSON.stringify(existingHotel), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update hotel ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Hotel.findByIdAndDelete(params.id);

        return new Response("Hotel deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete hotel ${error}`, { status: 500 });
    }
}
