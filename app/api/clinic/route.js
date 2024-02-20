import { connectToDatabase } from '@/utils/database/database';
import Clinic from '@/utils/database/models/clinic';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const clinics = await Clinic.find({}).populate("address");

        return new Response(JSON.stringify(clinics), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all clinics ${error}`, { status: 500 })
    }
}