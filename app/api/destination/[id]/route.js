import { connectToDatabase } from '@/utils/database/database';
import Destination from '@/utils/database/models/destination';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const destination = await Destination.findById(params.id).populate("address");

        if (!destination) return new Response("Destination not found", { status: 404 });

        return new Response(JSON.stringify(destination), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch destination ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { name, addressId } = await request.json();

    try {
        await connectToDatabase();

        const existingDestination = await Destination.findById(params.id);

        if (!existingDestination) return new Response("Destination not found", { status: 404 });

        existingDestination.name = name;
        existingDestination.address = addressId;

        existingDestination.save();

        return new Response(JSON.stringify(existingDestination), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update destination ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Destination.findByIdAndDelete(params.id);

        return new Response("Destination deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete destination ${error}`, { status: 500 });
    }
}
