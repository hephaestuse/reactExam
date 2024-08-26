/* eslint-disable react/prop-types */
function ContactCard({ items, children }) {
  const { label, icon } = items;

  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className=" mb-2 pb-2">
        <span>{label}</span>
      </label>
      <div className="bg-white hover:bg-main-900 hover:text-white p-2 mx-5 rounded-xl flex items-center">
        <img
          src={`icons/${icon}`}
          alt=""
          className="me-3 p-2 bg-main-900-25% rounded-lg"
        />
        <span className="text-sm">{children}</span>
      </div>
    </div>
  );
}

export default ContactCard;
