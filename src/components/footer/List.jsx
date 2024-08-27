import ContactCard from "../main/ContactCard";

/* eslint-disable react/prop-types */
function List({ children, listItems, listType }) {
  const liStyle =
    "text-muted hover:text-black ps-4 cursor-pointer text-lg  customFooterLiBulet mb-4";
  if (listType === "ul") {
    return (
      <ul className="marker:text-blue-300">
        <h2 className="text-lg font-semibold customFooterHBulet ps-4">
          {children}
        </h2>
        {listItems?.map((item) => (
          <li key={item.id} className={liStyle}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
  if (listType === "card") {
    return (
      <div className="col-span-2">
        <h2 className="text-lg font-semibold customFooterHBulet ps-4">
          {children}
        </h2>
        {listItems.map((item) => (
          <ContactCard color="gray" items={item} key={item.id}>
            {item.data}
          </ContactCard>
        ))}
      </div>
    );
  }
}

export default List;
