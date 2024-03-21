'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import FormOffer from '@/components/FormOffer';

const CreateOffer = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [offer, setOffer] = useState({
    name: '',
    clinic: '',
    hotel: '',
    address: '',
    destination: '',
    description: '',
    rating: ''
  });

  const createOffer = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/offer/new', {
        method: 'POST',
        body: JSON.stringify({
          name: offer.name.trim(),
          clinicId: offer.clinic.trim(),
          hotelId: offer.hotel.trim(),
          addressId: selectedAddress,
          destinationId: offer.destination.trim(),
          description: offer.description.trim(),
          rating: 0
        })
      })

      if (response.ok) {
        console.log("Successfully added to the database");
        setOffer({ ...offer, name: '', description: '' });
        setSuccessMessage(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      setTimeout(() => setSuccessMessage(false), 5000)
    }
  }

  const onChangeAddressHandler = (e) => {
    setSelectedAddress(e.target.value);
  }

  return (
    session?.user?.role === "admin" ? (
      <FormOffer
        type="Create"
        offer={offer}
        setOffer={setOffer}
        successMessage={successMessage}
        submitting={submitting}
        handleSubmit={createOffer}
        selectedAddress={selectedAddress}
        handleOnChangeAddress={onChangeAddressHandler}
      />
    ) : (
      <div className="forms_section">
        <h1 className="access">Access Denied</h1>
        <div className="permissions">You don't have the permissions</div>
      </div>
    )
  )
}

export default CreateOffer
