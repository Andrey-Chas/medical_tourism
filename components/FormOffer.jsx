import Select from '@/components/Select';
import Link from 'next/link';
import Image from 'next/image';

const FormOffer = ({ type, offer, setOffer, successMessage, submitting, handleSubmit, selectedAddress, handleOnChangeAddress }) => {
    return (
        <section className="forms_section">
            <h1 className="forms_name">
                {type} Offer
            </h1>

            <form
                onSubmit={handleSubmit}
                className="mt-10"
            >
                <label className="forms_label">Name:</label>
                <input
                    value={offer.name}
                    onChange={(e) => setOffer({ ...offer, name: e.target.value })}
                    placeholder="Name of the offer..."
                    required
                    className="input_field"
                />
                <br />
                <label className="forms_label">Address:</label>
                <Select
                    type='address'
                    handleOnChangeAddress={handleOnChangeAddress}
                />
                <br />
                <label className="forms_label">Clinic name:</label>
                <Select
                    type='clinic'
                    addressValue={selectedAddress}
                    handleOnChangeAddress={(e) => setOffer({ ...offer, clinic: e.target.value })}
                />
                <br />
                <label className="forms_label">Hotel name:</label>
                <Select
                    type='hotel'
                    addressValue={selectedAddress}
                    handleOnChangeAddress={(e) => setOffer({ ...offer, hotel: e.target.value })}
                />
                <br />
                <label className="forms_label">Destination name:</label>
                <Select
                    type='destination'
                    addressValue={selectedAddress}
                    handleOnChangeAddress={(e) => setOffer({ ...offer, destination: e.target.value })}
                />
                <br />
                <label className="forms_label">Description:</label>
                <textarea
                    value={offer.description}
                    onChange={(e) => setOffer({ ...offer, description: e.target.value })}
                    placeholder="Write description here..."
                    required
                    className="input_field"
                />
                <br />

                <div>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="create_btn"
                    >
                        {submitting ? "Working" : type}
                    </button>
                    <Link href="/display/offer" className="cancel_btn ml-5">
                        Cancel
                    </Link>
                    {successMessage ? (
                        <span className="ml-10 text-green-500">
                            Created!
                            <Link href="/display/offer" className="view_btn">
                                <Image
                                    src="/assets/icons/view.svg"
                                    alt="View Icon"
                                    width={20}
                                    height={20}
                                />
                                View
                            </Link>
                        </span>
                    ) : (
                        null
                    )}
                </div>
            </form>
        </section>
    )
}

export default FormOffer
