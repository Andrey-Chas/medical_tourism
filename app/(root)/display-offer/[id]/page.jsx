'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import DisplayOffer from '@/components/DisplayOffer';

const ViewOffer = ({ params }) => {
    const { data: session } = useSession();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [offer, setOffer] = useState([]);
    const router = useRouter();
    
    useEffect(() => {
        const fetchOffer = async () => {
            const response = await fetch(`/api/offer/${params?.id}`);
            const data = await response.json();

            setComments(data.comment)
            setOffer(data);
        };

        { params?.id && fetchOffer() };
    }, [params.id])

    const handlePostCommentClick = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/offer/comment", {
                method: 'POST',
                body: JSON.stringify({
                    _id: params.id,
                    comment,
                })
            })

            if (response.ok) {
                console.log("Successfully added to the database");
                const form = e.target;
                form.reset();
                const response = await fetch(`/api/offer/${params?.id}`);
                const data = await response.json();

                setComments(data.comment);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <DisplayOffer
            data={offer}
            session={session}
            comments={comments}
            setComment={setComment}
            handlePostCommentClick={handlePostCommentClick}
        />
    )
}

export default ViewOffer
