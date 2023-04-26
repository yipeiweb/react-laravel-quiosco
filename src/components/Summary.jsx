import { moneyFormater } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"
import { ProductSummary } from "./ProductSummary"

export default function Summary() {
  const {showSummary, orders, total, handleConfirmOrders, handleShowSummary} = useQuiosco()

  const checkOrders = () => orders.length === 0;


  return (
    <aside className="md:w-72 w-full h-screen 
                      overflow-y-scroll p-5">

        <div className="flex justify-end md:hidden mt-5">
          <button  onClick={handleShowSummary}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
        </div>

        <h2 className="md:text-4xl text-2xl font-black">
          Mi pedido
        </h2>
        <p className="md:text-lg text-sm my-5">
          Aqui podrás ver el resumen y totaes de tu pedido
        </p>
        <div className="py-10">
          {
            orders.length === 0 ? (
              <p className="text-center md:text-2xl text-xl">
                No has hecho pedidos
              </p>
            ) : (
              orders.map(product => (
                <ProductSummary 
                  key={product.id}
                  product={product}
                />
              ))
            )
          }
        </div>

        <p className="text-lg md:text-xl mt-10">
          Total: {''}
          {moneyFormater(total)}
        </p>

        <form className="w-full"
              onSubmit={(e) => handleConfirmOrders(e)}>
          <div className="mt-5">
            <input type="submit" 
                   value="Confirmar pedido"
                   className={`${checkOrders() 
                              ? 'bg-indigo-100' 
                              : 'bg-amber-400 hover:bg-amber-600 '}
                              px-5 py-2 rounded uppercase font-bold
                              text-white text-center w-full
                              cursor-pointer`}
                  disabled={checkOrders()}
             />
          </div>
        </form>
    </aside>
  )
}
