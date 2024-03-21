'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import FormHotel from '@/components/FormHotel';

const UpdateHotel = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const hotelId = searchParams.get("id");
  const [hotel, setHotel] = useState({
    name: '',
    address: '',
    url: '',
    phone_number: '',
  });

  useEffect(() => {
    const getHotel = async () => {
      const response = await fetch(`/api/hotel/${hotelId}`);
      const data = await response.json();

      setHotel({
        name: data.name,
        address: data.address,
        url: data.url,
        phone_number: data.phone_number,
      })
    }

    { hotelId && getHotel() }
  }, [hotelId])

  const updateHotel = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!hotelId) return console.log("Hotel not found");

    try {
      const response = await fetch(`/api/hotel/${hotelId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: hotel.name.trim(),
          addressId: hotel.address.trim(),
          url: hotel.url.trim(),
          phone_number: hotel.phone_number.toString().trim()
        })
      })

      if (response.ok) {
        console.log("Successfully updated");
        router.push("/display/hotel")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    session?.user?.role === "admin" ? (
      <FormHotel
        type="Edit"
        hotel={hotel}
        setHotel={setHotel}
        submitting={submitting}
        handleSubmit={updateHotel}
      />
    ) : (
      <div className="forms_section">
        <h1 className="access">Access Denied</h1>
        <div className="permissions">You don't have the permissions</div>
      </div>
    )
  )
}

export default UpdateHotel
