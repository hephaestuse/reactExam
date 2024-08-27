import Form from "./Form";

function ContactForm() {
  return (
    <>
      <h1 className="font-bold text-xl mx-10 mt-10">شبکه تماس با حاجیجا</h1>

      <span className="mx-10 mt-10">
        <sup className="text-red-600 font-semibold">*</sup>مشتری گرامی لطفا
        اطلاعات تمامی بخش هارا با دقت پر کنید.
      </span>
      <div className="w-full flex flex-row justify-between p-10">
        <div className="w-6/12">
          <Form />
        </div>
        <div className="rounded-2xl justify-end flex w-6/12 ">
          <img
            src="staticimg/formBoxImg.png"
            alt=""
            className="rounded-2xl w-11/12 self-center  h-full"
          />
        </div>
      </div>
    </>
  );
}

export default ContactForm;
