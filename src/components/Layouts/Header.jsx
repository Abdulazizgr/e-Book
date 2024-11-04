import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0  flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              e-Book
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {  // Dark Mode Toggle
            
            darkMode ? (    <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-brightness-high-fill"
            ></span> ) : (<span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-moon-fill"
            ></span>)
             
            
            
            }
           
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
