import Select from '@/components/Select';
import Link from 'next/link';
import Image from 'next/image';

const FormHotel = ({ type, hotel, setHotel, successMessage, submitting, handleSubmit }) => {
    return (
        <section className="forms_section">
            <h1 className="forms_name">
                {type} Hotel
            </h1>

            <form
                onSubmit={handleSubmit}
                className="mt-10"
            >
                <label className="forms_label">Name:</label>
                <input
                    value={hotel.name}
                    onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
                    placeholder="Name of the hotel..."
                    required
                    className="input_field"
                />
                <br />
                <label className="forms_label">Address:</label>
                <Select
                    data={hotel}
                    setData={setHotel}
                />
                <br />
                <label className="forms_label">Url:</label>
                <input
                    value={hotel.url}
                    type='url'
                    onChange={(e) => setHotel({ ...hotel, url: e.target.value })}
                    placeholder="Url..."
                    required
                    className="input_field"
                />
                <br />
                <label className="forms_label">Phone Number:</label>
                <input
                    value={hotel.phone_number}
                    type="tel"
                    onChange={(e) => setHotel({ ...hotel, phone_number: e.target.value })}
                    placeholder="Phone number..."
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
                    <Link href="/" className="cancel_btn ml-5">
                        Cancel
                    </Link>
                    {successMessage ? (
                        <span className="ml-10 text-green-500">
                            Created!
                            <Link href="/" className="view_btn">
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

export default FormHotel
