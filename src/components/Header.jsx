import React, { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs';



const Header = ({toggleDarkMode}) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="py-5 mb-12 flex justify-between bg-gray-200 px-10">
            <h1 className="text-xl font-burtons text-gray-700 dark:text-gray-700">
              Developed By Moe
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl text-gray-700 dark:text-gray-700"
                  onClick={() => {
                    setDarkMode(!darkMode)
                    toggleDarkMode()
                  }}
                ></BsFillMoonStarsFill>
              </li>
            </ul>
          </nav>
  )
}

export default Header