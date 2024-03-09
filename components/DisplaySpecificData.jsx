import DeleteConfirm from "./DeleteConfirm";

const DisplaySpecificData = ({ type, data, isAddress, handleEditClick, handleDeleteClick, isModalOpen, setIsModalOpen }) => {
    return (
        <section className="forms_section">
            <h1 className="forms_name">
                {type[0].toUpperCase() + type.slice(1)} Details
            </h1>

            {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    {
                        (key !== "_id" && key !== "__v") && (
                            <div>
                                <label className="forms_label">{key !== "phone_number" ? key[0].toUpperCase() + key.slice(1) : "Phone number"}{isAddress || key === "clinic" || key === "hotel" || key === "destination" ? " name:" : ":"}</label>
                                <div className="view_data">
                                    {!value ? "Not set" : key === "clinic" || key === "hotel" || key === "address" || key === "destination" ? value.name || value.country + ", " + value.city : value}
                                </div>
                                <br />
                            </div>
                        )
                    }
                </div>
            ))}

            <div>
                <button
                    type="button"
                    className="edit_btn"
                    onClick={handleEditClick}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="delete_btn ml-5"
                    onClick={handleDeleteClick}
                >
                    Delete
                </button>
            </div>
            <DeleteConfirm
                type={type}
                isModalOpen={isModalOpen}
                dataValue={data}
                setIsModalOpen={setIsModalOpen}
                isRouter={true}
            />
        </section>
    )
}

export default DisplaySpecificData
