const Navbar = () => {
  return (
    <nav className="bg-gray-500">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex">
          <img
            src="football-svgrepo-com.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Fifa
          </span>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex gap-5">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:dark:text-yellow-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-yellow-500 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-yellow-500 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-yellow-500 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-yellow-500 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
