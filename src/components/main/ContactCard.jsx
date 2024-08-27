/* eslint-disable react/prop-types */
function ContactCard({ items, children, color = "white" }) {
  const { label, icon } = items;

  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className=" mb-2 pb-2">
        <span>{label}</span>
      </label>
      <div
        className={`${
          color === "white" && "bg-white"
        } ${color === "gray" && "bg-slate-100"} group hover:bg-main-900 hover:text-white p-2 mx-5 rounded-xl flex items-center`}
      >
        <div className="me-2 bg-main-900-25% group-hover:bg-white rounded-lg w-fit">
          <img
            src={`icons/${icon}.svg`}
            alt=""
            className=" p-2 bg-main-900-25% rounded-lg"
          />
        </div>
        <span className="text-sm">{children}</span>
      </div>
    </div>
  );
}

export default ContactCard;
