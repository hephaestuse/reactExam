function NavBar() {
  return (
    <ul
      className="flex justify-between gap-8 p-[10px] h-fit mr-auto ml-10
      items-center bg-grey-500-30%
     rounded-xl font-semibold"
    >
      <li className="cursor-pointer">صفحه اصلی</li>
      <svg
        width="2"
        height="22"
        viewBox="0 0 2 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1V21"
          stroke="#7A7A7A"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
      <li className="cursor-pointer">اقامتگاه</li>
      <svg
        width="2"
        height="22"
        viewBox="0 0 2 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1V21"
          stroke="#7A7A7A"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
      <li className="cursor-pointer">مقالات</li>
      <li className="cursor-pointer p-3 bg-main-900 rounded-xl text-white">راه های ارتباطی</li>
      <img src="navBarIcon.svg" alt="" className="cursor-pointer" />
    </ul>
  );
}

export default NavBar;
