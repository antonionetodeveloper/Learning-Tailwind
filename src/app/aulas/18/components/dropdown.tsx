"use client"

import { useState } from "react"

export default function DropDown() {
   const [dropdown, setDropdown] = useState(false)
   const handleDropdown = () => setDropdown(!dropdown)

   return (
      <div className="relative">
         <button
            onClick={handleDropdown}
            className="flex items-center bg-slate-100 text-black p-2 rounded hover:bg-slate-300 duration-300"
         >
            Mostrar mais
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="w-5 h-5 mx-1"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
               />
            </svg>
         </button>
         {!dropdown ? null : (
            <ul className="w-full flex flex-col my-1 bg-slate-100 text-black absolute">
               <li className="w-full">
                  <a
                     href=""
                     className="block p-1 rounded hover:bg-slate-300 duration-300"
                  >
                     Link 1
                  </a>
               </li>
               <a
                  href=""
                  className="block p-1 rounded hover:bg-slate-300 duration-300"
               >
                  Link 2
               </a>
               <a
                  href=""
                  className="block p-1 rounded hover:bg-slate-300 duration-300"
               >
                  Link 3
               </a>
               <a
                  href=""
                  className="block p-1 rounded hover:bg-slate-300 duration-300"
               >
                  Link 4
               </a>
               <a
                  href=""
                  className="block p-1 rounded hover:bg-slate-300 duration-300"
               >
                  Link 5
               </a>
            </ul>
         )}
      </div>
   )
}
