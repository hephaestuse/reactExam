import List from "./List";

function Footer() {
  const fakeData = [
    { id: 1, icon: "call", data: "021-88844243" },
    {
      id: 3,
      icon: "sms",
      data: "info@hajija.com",
    },
    {
      id: 5,
      icon: "location",
      data: "تهران، جردن خیابان مطهری، رو به رو بانک پارسیان",
    },
  ];
  const links = [
    { id: 1, text: "درباره ما" },
    { id: 2, text: "تماس با ما" },
    { id: 3, text: "حقوق کاربران" },
    { id: 4, text: "سوالات متداول" },
    { id: 5, text: "قوانین ومقررات" },
    { id: 6, text: "وبلاگ حاجیجا" },
  ];
  const cities = [
    { id: 1, text: "شهر مشهد" },
    { id: 2, text: "شهر تهران" },
    { id: 3, text: "شهر کردستان" },
    { id: 4, text: "شهر شیراز" },
    { id: 5, text: "شهر خوزستان" },
    { id: 6, text: "شهر تبریز" },
  ];
  return (
    <div className="px-10 mt-64 relative z-20 rounded-[40px] h-[600px]">
      <img
        src="icons/upChevron.svg"
        alt=""
        className="absolute z-50 top-[-20%] scale-75  ds3:scale-100 left-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
      />
      <svg
        viewBox="0 0 1638 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 top-[-50px] right-10 left-10 drop-shadow-2xl"
      >
        <path
          d="M754.379 0H40C17.9086 0 0 17.9086 0 40V84.0343H1630C1634.42 84.0343 1638 80.4526 1638 76.0343V40C1638 17.9086 1620.09 0 1598 0H886.215C880.367 0 874.812 2.55935 871.012 7.00438L869.237 9.08156C844.892 37.56 801.4 39.1298 775.066 12.4805L768.605 5.94219C764.847 2.13991 759.724 0 754.379 0Z"
          fill="white"
        />
      </svg>
      <div className=" mb-32 px-10 rounded-b-[40px] shadow-xl bg-white absolute right-10 left-10 z-50">
        <div className="grid grid-cols-8">
          <h1 className="text-xl font-bold col-span-7 customFooterHBulet ps-4">
            داستان حاجیجا چیست؟
          </h1>
          <span className="text-muted col-span-7 ps-4 pt-4 customFooterPBulet">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </span>
          <img
            src="staticimg/footerLogo.svg"
            alt=""
            className=" col-span-1 place-self-end"
          />
        </div>
        <div className="grid grid-cols-7">
          <List listType="ul" listItems={links}>
            راهنمای مشتریان
          </List>
          <List listType="ul" listItems={links}>
            محصولات ما
          </List>
          <List listType="ul" listItems={cities}>
            اقامتگاه
          </List>
          <List listType="card" listItems={fakeData}>
            ارتباط با ما
          </List>
          <div className="col-span-2">
            <h2 className="text-lg font-semibold customFooterHBulet ps-4 col-span-3">
              شمارتو ثبت کن ازتخفیفات خبردار شو
            </h2>
            <div className="gap-x-3 grid grid-cols-3  grid-flow-row auto-rows-min ">
              <form className="flex flex-col col-span-3">
                <div className=" py-2 mt-2 rounded-xl items-center ">
                  <div className="me-2 p-2 bg-slate-100 flex flex-grow  rounded-lg ">
                    <input
                      type="number"
                      className="text-xl font-semibold flex-grow focus:outline-none bg-transparent"
                    />

                    <button
                      type="submit"
                      className="bg-main-900 rounded-lg text-white p-2"
                    >
                      ثبت شماره
                    </button>
                  </div>
                </div>
              </form>
              <div className="bg-slate-100 justify-center flex rounded-xl ">
                <img src="staticimg/enamad.svg" alt="" />
              </div>
              <div className="bg-slate-100 justify-center flex rounded-xl ">
                <img src="staticimg/neshanmeli.svg" alt="" />
              </div>
              <div className="bg-slate-100 justify-center flex rounded-xl ">
                <img src="staticimg/enamad.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" py-2 mt-2 rounded-xl items-center ">
          <div className="me-2 p-2 bg-slate-100 flex flex-grow  rounded-xl items-center">
            <span className="flex-grow bg-transparent text-lg font-semibold ">
              تمامی حقوق این وبسایت متعلق به وبسایت حاجی جا میباشد
            </span>

            <span className="bg-black rounded-lg text-white p-4 font-medium">
              Design & Develop By Sevin Team
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
