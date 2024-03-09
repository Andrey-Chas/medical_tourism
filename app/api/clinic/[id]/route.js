import { connectToDatabase } from '@/utils/database/database';
import Clinic from '@/utils/database/models/clinic';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const clinic = await Clinic.findById(params.id).populate("address");

        if (!clinic) return new Response("Clinic not found", { status: 404 });

        return new Response(JSON.stringify(clinic), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch clinic ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { name, specialisation, addressId, url, phone_number } = await request.json();

    try {
        await connectToDatabase();

        const existingClinic = await Clinic.findById(params.id);

        if (!existingClinic) return new Response("Clinic not found", { status: 404 });

        existingClinic.name = name;
        existingClinic.specialisation = specialisation;
        existingClinic.address = addressId;
        existingClinic.url = url;
        existingClinic.phone_number = phone_number;

        existingClinic.save();

        return new Response(JSON.stringify(existingClinic), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update clinic ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Clinic.findByIdAndDelete(params.id);

        return new Response("Clinic deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete clinic ${error}`, { status: 500 });
    }
}
