'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import FormOffer from '@/components/FormOffer';

const UpdateOffer = () => {
  const [submitting, setSubmitting] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const offerId = searchParams.get("id");
  const [offer, setOffer] = useState({
    name: '',
    clinic: '',
    hotel: '',
    address: '',
    destination: '',
    description: '',
    rating: ''
  });

  useEffect(() => {
    const getOffer = async () => {
        const response = await fetch(`/api/offer/${offerId}`);
        const data = await response.json();

        setOffer({
            name: data.name,
            clinic: data.clinic,
            hotel: data.hotel,
            address: data.address,
            destination: data.destination,
            description: data.description,
            rating: data.rating,
        })
    }

    {offerId && getOffer()}
  }, [offerId])

  const updateOffer = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!offerId) return console.log("Offer not found");

    try {
      const response = await fetch(`/api/offer/${offerId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: offer.name.trim(),
          clinicId: offer.clinic.trim(),
          hotelId: offer.hotel.trim(),
          addressId: selectedAddress,
          destinationId: offer.destination.trim(),
          description: offer.description.trim(),
          rating: offer.rating.toString().trim()
        })
      })

      if (response.ok) {
        console.log("Successfully updated");
        router.push("/display/offer")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  const onChangeAddressHandler = (e) => {
    setSelectedAddress(e.target.value);
  }

  return (
    <FormOffer
      type="Edit"
      offer={offer}
      setOffer={setOffer}
      submitting={submitting}
      handleSubmit={updateOffer}
      selectedAddress={selectedAddress}
      handleOnChangeAddress={onChangeAddressHandler}
    />
  )
}

export default UpdateOffer
