import { connectToDatabase } from '@/utils/database/database';
import Offer from '@/utils/database/models/offer';

export const POST = async (req) => {
    const { _id, comment } = await req.json();

    try {
        await connectToDatabase();

        const offer = await Offer.findById(_id);

        if (!offer) return new Response("Offer not found", { status: 404 });

        offer.comment.push(comment);

        offer.save();

        return new Response(JSON.stringify(offer), { status: 201 });
    } catch (error) {
        return new Response(`Failed to add a comment`, { status: 500 });
    }
}