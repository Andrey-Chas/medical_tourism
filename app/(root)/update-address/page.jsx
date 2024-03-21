'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import FormAddress from '@/components/FormAddress';

const UpdateAddress = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const addressId = searchParams.get("id");
  const [address, setAddress] = useState({
    city: '',
    country: ''
  });

  useEffect(() => {
    const getAddress = async () => {
      const response = await fetch(`/api/address/${addressId}`);
      const data = await response.json();

      setAddress({
        city: data.city,
        country: data.country,
      })
    }

    { addressId && getAddress() }
  }, [addressId])

  const updateAddress = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!addressId) return console.log("Address not found");

    try {
      const response = await fetch(`/api/address/${addressId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          city: address.city.trim(),
          country: address.country.trim()
        })
      })

      if (response.ok) {
        console.log("Successfully updated");
        router.push("/display/address")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    session?.user?.role === "admin" ? (
      <FormAddress
        type="Edit"
        address={address}
        setAddress={setAddress}
        submitting={submitting}
        handleSubmit={updateAddress}
      />
    ) : (
      <div className="forms_section">
        <h1 className="access">Access Denied</h1>
        <div className="permissions">You don't have the permissions</div>
      </div>
    )
  )
}

export default UpdateAddress
