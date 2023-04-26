import { Product } from "../components/Product.jsx";
import { products as productsDB } from "../data/products.js";
import useQuiosco from '../hooks/useQuiosco'

export default function Home() {
  const {
    showOpenSummaryButton, currentCategory, 
    handleShowSummary
  } = useQuiosco()

  const products = productsDB.filter(product => 
    product.category_id === currentCategory.id)

  return (
    <div className="mt-5 ml-3 bg-gray-50">
      <h1 className="text-2xl font-black text-center md:text-left">
        {currentCategory.name}
      </h1>
      <p className="text-xl my-10 text-center md:text-left">
          Elige y personaliza tu pedido a continuación.
      </p>

      <div className="grid gap-4 grid-cols-1 
                     md:grid-cols-1 xl:grid-cols-2">
        {products.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </div>

      <div className={`${showOpenSummaryButton ? '' : 'hidden'} 
                    md:hidden fixed bottom-0 right-2 z-50 w-full h-16
                    flex justify-end items-center`}>
          <button onClick={() => {handleShowSummary() }} 
                  className="text-center bg-amber-500 hover:bg-amber-800 rounded-full
                             p-3 font-bold text-white truncate">
            Resumen del pedido
          </button>
      </div>
    </div>
  )
}
