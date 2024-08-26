/* eslint-disable react/prop-types */
import ContactCard from "./ContactCard";

function ContactCards({ cards }) {
  //   const style = {
  //     larg: " ",
  //   };
  return (
    <div className="w-6/12">
      <div className="grid grid-cols-2 gap-2 font-bold">
        {cards.map((item) => (
          <ContactCard items={item} key={item.id}>
            {item.data}
          </ContactCard>
        ))}
      </div>
    </div>
  );
}

export default ContactCards;
