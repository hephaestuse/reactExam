import ContactCards from "./ContactCards";

function Contacts() {
  const fakedata = [
    { id: 1, label: "شماره تماس", icon: "call.svg", data: "021-88844243" },
    {
      id: 2,
      label: "شبکه اجتماعی تلگرام",
      icon: "callRevers.svg",
      data: "https://te.hajija.com",
    },
    {
      id: 3,
      label: "ایمیل شرکت",
      icon: "call.svg",
      data: "info@hajija.com",
    },

    {
      id: 4,
      label: "شبکه اجتماعی اینستاگرام",
      icon: "call.svg",
      data: "https://insta.hajija.com",
    },
    {
      id: 5,
      label: "آدرس شرکت",
      icon: "call.svg",
      data: "تهران، جردن خیابان مطهری، رو به رو بانک پارسیان",
    },
    {
      id: 6,
      label: "شبکه اجتماعی ایکس",
      icon: "call.svg",
      data: "https://x.hajija.com",
    },
  ];
  return (
    <>
      <h1 className="font-bold text-xl mx-10 mt-10">راه های ارتباطی حاجی جا</h1>
      <div className="w-full flex flex-row justify-between p-10">
        <ContactCards size="larg" cards={fakedata} />
        <div className="rounded-2xl w-4/12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6429.119470436176!2d59.57303396715694!3d36.322988341864225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c9192c51932a9%3A0x47a1adf935afc7fd!2sRazavi%20Khorasan%20Province%2C%20Mashhad%2C%20Ferdowsi%20Square%2C%20Iran!5e0!3m2!1sen!2s!4v1724678074915!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl w-full aspect-video"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contacts;
