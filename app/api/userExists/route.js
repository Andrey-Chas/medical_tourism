import { connectToDatabase } from "@/utils/database/database";
import User from "@/utils/database/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDatabase();

        const { email } = await req.json();

        const user = await User.findOne({ email }).select("_id");

        console.log("user: ", user);

        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
    }
}