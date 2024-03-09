import { connectToDatabase } from '@/utils/database/database';
import Address from '@/utils/database/models/address';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const address = await Address.findById(params.id);

        if (!address) return new Response("Address not found", { status: 404 });

        return new Response(JSON.stringify(address), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch address ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { city, country } = await request.json();

    try {
        await connectToDatabase();

        const existingAddress = await Address.findById(params.id);

        if (!existingAddress) return new Response("Address not found", { status: 404 });

        existingAddress.city = city;
        existingAddress.country = country;

        existingAddress.save();

        return new Response(JSON.stringify(existingAddress), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update address ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Address.findByIdAndDelete(params.id);

        return new Response("Address deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete address ${error}`, { status: 500 });
    }
}
