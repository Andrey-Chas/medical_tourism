import Link from 'next/link';
import Image from 'next/image';

const FormAddress = ({ type, address, setAddress, successMessage, submitting, handleSubmit }) => {
    return (
        <section className="forms_section">
            <h1 className="forms_name">
                {type} Address
            </h1>

            <form
                onSubmit={handleSubmit}
                className="mt-10"
            >
                <label className="forms_label">City:</label>
                <input
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    placeholder="Name of the city..."
                    required
                    className="input_field"
                />
                <br />
                <label className="forms_label">Country:</label>
                <input
                    value={address.country}
                    onChange={(e) => setAddress({ ...address, country: e.target.value })}
                    placeholder="Name of the country..."
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
                            <Link href="/display/address" className="view_btn">
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

export default FormAddress
