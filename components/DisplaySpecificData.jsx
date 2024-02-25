const DisplaySpecificData = ({ type, data, isAddress}) => {
  return (
    <section className="forms_section">
        <h1 className="forms_name">
            {type} details
        </h1>

        <div>
            {data.country}
        </div>
        <div>
            {data.city}
        </div>
    </section>
  )
}

export default DisplaySpecificData
