import { Outlet } from "react-router-dom";

export default function authlayout() {
  return (
    <main className='max-w-4xl m-auto mt-10 
                     md:mt-28 flex flex-col 
                     md:flex-row '>
      <img src="../img/logo.svg" 
        alt="Imagen logo tipo" 
        className='w-52 ml-2 sm:w-80 '/>
      <div className='p-10 w-full'>
        <Outlet />
      </div>      
    </main>

  )
}
