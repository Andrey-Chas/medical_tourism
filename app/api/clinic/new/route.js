import { connectToDatabase } from '@/utils/database/database';
import Clinic from '@/utils/database/models/clinic'

export const POST = async (req) => {
    const { name, specialisation, addressId, url, phone_number } = await req.json();

    try {
        await connectToDatabase();
        const newClinic = new Clinic({
            name,
            specialisation,
            address: addressId,
            url,
            phone_number
        })

        await newClinic.save();

        return new Response(JSON.stringify(newClinic), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new clinic ${error}`, { status: 500})
    }
}