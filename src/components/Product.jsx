import { moneyFormater } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export const Product = ({product}) => {
    const {handleClickModal, handleSetProduct} = useQuiosco()
    const {name, image, price} = product
  return (
    <div className="border p-3 shadow bg-white">
        <img src={`/img/${image}.jpg`} 
             alt={`imagen ${name}`} 
             className="w-11/12 m-auto" />

        <div className="p-5">
            <h3 className="text-xl font-bold">
                {name}
            </h3>
            <p className="mt-5 font-black 
                         text-2xl text-amber-500">
                {moneyFormater(price)}
            </p>

            <button className="bg-amber-400 hover:bg-amber-600 
                               text-white w-full mt-5 p-3 
                               uppercase font-bold"
                onClick={() => {
                    handleClickModal()
                    handleSetProduct(product)
                }}>
                Agregar
            </button>
        </div>
    </div>
  )
}
