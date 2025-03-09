import React from 'react'

const TabSwitcher = () => {
  return (
    <>
       <div className="mt-14 px-8 border-b border-gray-300 dark:border-gray-700">
          <ul className="flex space-x-8 text-gray-600 dark:text-gray-300 text-lg">
            <li className="pb-2 border-b-2 border-yellow-500 cursor-pointer">
              Bio
            </li>
            <li className="hover:border-b-2 hover:border-yellow-500 cursor-pointer">
              Projects
            </li>
            <li className="hover:border-b-2 hover:border-yellow-500 text-yellow-500 underline cursor-pointer">
              Certificates
            </li>
            <li className="hover:border-b-2 hover:border-yellow-500 cursor-pointer">
              courses
            </li>
          </ul>
        </div>
    </>
  )
}

export default TabSwitcher
