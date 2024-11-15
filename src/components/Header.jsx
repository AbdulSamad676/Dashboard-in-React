import { faBell, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/Slices/ThemeSlice";
// import { FaAdjust } from "react-icons/fa";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
function Header({ title }) {

  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const formattedTitle = title.replace("/", "");
  const capitalizedTitle =
    formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1);
  return (
   
    <div className="secondary-bg w-full grid grid-cols-12 gap-3 drop-shadow-lg px-3 py-2 dark:bg-gray-900">
  <div className="font-semibold text-blue-700 p-1 rounded col-span-3 md:col-span-2 flex justify-center items-center dark:text-white">
    <h2>{capitalizedTitle}</h2>
  </div>
  <div className="grid md:grid-cols-2 items-center p-1 rounded col-span-6 md:col-span-7">
    <p className="text-xs ml-auto p-0 my-0 hidden md:block bg-white text-black dark:bg-gray-800 dark:text-white">
      Your Profile Complete ratio: <span className="font-semibold">80%</span>
    </p>
    <div className="bg-gray-100 rounded h-2 mx-3 dark:bg-gray-700">
      <div className="bg-green-500 w-10/12 text-xs text-center rounded text-white h-2"></div>
    </div>
  </div>
  <div className="flex justify-center items-center p-1 rounded col-span-3">
  <button
          onClick={() => dispatch(toggleTheme())}
          className="text-xl dark:text-white mx-3"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
    <FontAwesomeIcon
      className="mx-3  text-lg cursor-pointer text-[#4953cf] dark:text-white"
      icon={faCircleQuestion}
    />
    <FontAwesomeIcon
      className="mx-3 text-lg cursor-pointer text-[#4953cf] dark:text-white"
      icon={faBell}
    />
  </div>
</div>

  );
}

export default Header;
