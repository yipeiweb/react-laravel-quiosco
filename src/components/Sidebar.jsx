import { Category } from "./Category";
import useQuiosco from "../hooks/useQuiosco";
import { useState } from "react";

export default function Sidebar() {
  const {showMenu, categories, handleShowMenu} = useQuiosco()

  return (
    <div className="md:w-52 border-b-2">
        <div className="p-4 flex justify-between items-center">
          <img  src="img/logo.svg" 
                alt="Logo" 
                className="w-10 md:w-40" />
          <button onClick={() => {handleShowMenu()}}
                  className="px-3 py-2 showMenu h-10 md:hidden
                            border rounded bg-amber-400 
                            text-white border-amber-600 
                            hover:text-white hover:border-white">
            <svg className="fill-current w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        

        <div className={`mt-10 md:block ${showMenu ? '' : 'hidden'}`}>
          {categories.map(category => (
            <Category key={category.id} category={category} />
          ))}
        </div>

        {/* <div className="my-5 px-5">
          <button className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">
            Cancelar Orden
          </button>
        </div>  */}
    </div>
  )
}
