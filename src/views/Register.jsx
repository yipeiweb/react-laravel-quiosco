import { Link } from "react-router-dom";
export default function Register() {
  return (
    <>
     <h1 className="text-4xl font-black">
        Crea tu cuenta
      </h1>
      <p>
        Crea tu cuenta llenando el formulario
      </p>
      <div className="bg-white shadow-md rounded-md
                        mt-10 px-5 py-10">
        <form>
          <div className='mb-4'>
            <label  htmlFor="name"
                    className="text-slate-800">
              Nombre
            </label>
            <input  type="text" 
                    id="name"
                    name="name"
                    placeholder="Tu email"
                    className="mt-2 w-full p-3
                               bg-gray-50" />
          </div>

          <div className='mb-4'>
            <label  htmlFor="email"
                    className="text-slate-800">
              Email
            </label>
            <input  type="email" 
                    id="email"
                    name="email"
                    placeholder="Tu nombre"
                    className="mt-2 w-full p-3
                               bg-gray-50" />
          </div>

          <div className='mb-4'>
            <label  htmlFor="password"
                    className="text-slate-800">
              Password
            </label>
            <input  type="password" 
                    id="password"
                    name="password"
                    placeholder="Tu password"
                    className="mt-2 w-full p-3
                               bg-gray-50" />
          </div>
          <div className='mb-4'>
            <label  htmlFor="password_confirmation"
                    className="text-slate-800">
              Repite tu password
            </label>
            <input  type="password" 
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Repite tu password"
                    className="mt-2 w-full p-3
                               bg-gray-50" />
          </div>

          <input  type="submit" 
                  value="Crear cuenta"
                  className="bg-yellow-500 hover:bg-yellow-700 
                            text-white w-full mt-5 p-3 uppercase
                            font-bold cursor-pointer" />
        </form>
      </div>

      <nav className="mt-5">
        <Link   to="/auth/login"
                className="text-1xl">
          Ya tienes cuenta? Inica sesión
        </Link>
      </nav>
    </>
  )
}
