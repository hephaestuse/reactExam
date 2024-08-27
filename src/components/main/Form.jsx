function Form() {
  const inputStyle = {
    input: "p-5 rounded-xl focus:outline-none focus:ring-1 focus:ring-main-900",
    textarea:
      "p-5 rounded-xl focus:outline-none focus:ring-1 focus:ring-main-900 flex-grow  resize-none",
  };
  return (
    <>
      <form className="grid grid-cols-2 grid-rows-5 gap-5 font-bold h-full">
        <input
          type="text"
          className={inputStyle.input}
          placeholder="نام و نام خانوادگی را وارد فرمایید"
        />
        <input
          type="email"
          className={inputStyle.input}
          placeholder="ایمیل خود را وارد نمایید"
        />
        <input
          type="text"
          className={inputStyle.input}
          placeholder="موضوع مورد نظر را وارد کنید"
        />
        <input
          type="tel"
          className={inputStyle.input}
          placeholder="شماره مبایل خورد را وارد کنید"
        />

        <textarea
          name="Description"
          id="Description"
          className={`${inputStyle.textarea} row-span-3 col-span-2`}
          placeholder="توضیحات خود را وارد نمایید..."
        ></textarea>
      </form>
      <button type="submit" className="my-5 py-4 px-8 bg-main-900 rounded-xl font-semibold text-white">ارسال پیام</button>
    </>
  );
}

export default Form;
