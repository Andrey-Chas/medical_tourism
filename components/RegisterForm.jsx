'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password) {
            setError("All fields are required");
            return;
        }

        try {
            const resUserExists = await fetch("/api/userExists", {
                method: "POST",
                body: JSON.stringify({
                    email,
                }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists");
                return;
            }

            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    role: "user"
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/login");
            } else {
                console.log("User registration failed");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    }

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input className="input_login_register" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    <input className="input_login_register" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                    <input className="input_login_register" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="input_login_register" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="bg-green-600 text-white font-bold py-2 px-6 cursor-pointer">Register</button>

                    {
                        error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )
                    }

                    <Link href="/login" className="text-sm mt-3 text-right">
                        Already have an account? <span className="underline">Login</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
