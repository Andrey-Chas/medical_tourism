import { connectToDatabase } from "@/utils/database/database";
import User from "@/utils/database/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { firstName, lastName, email, password, role } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectToDatabase();

        await User.create({ firstName, lastName, email, password: hashedPassword, role });

        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: `An error occured while registering the user ${error}` }, { status: 500 });
    }
}