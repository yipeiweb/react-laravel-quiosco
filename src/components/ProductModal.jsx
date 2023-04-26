import { useState, useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { moneyFormater } from '../helpers';

export const ProductModal = () => {
    const {product, orders,
        handleClickModal, handleAddOrder} = useQuiosco()
    const [quantity, setQuantity] = useState(1)
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if(orders.some(orderState => 
            orderState.id === product.id)
        ) {
            const productEdit = orders.filter(orderState => 
                orderState.id === product.id
            )[0]
            setQuantity(productEdit.quantity)
            setEdit(true)
        } 
    }, [orders])
    
  return (
    <div className='flex gap-10'>
        <div className="md:w-1/3 flex items-center">
            <img src={`/img/${product.image}.jpg`} 
            alt={`Imagen producto ${product.name}`} />
        </div>

        <div className="md:w-2/3">
            <div className="flex justify-end items-start">
                <button  onClick={handleClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <h1 className="text-2xl md:text-3xl md:mt-5 font-bold mt-2">
                {product.name}
            </h1>

            <p className='mt-5 font-black text-3xl md:text-5xl text-amber-500'>
                {moneyFormater(product.price)}
            </p>

            <div className="flex gap-4 mt-10 mb-5">
                <button 
                    onClick={() => {
                        if(quantity <= 1) return
                        setQuantity(quantity-1)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                <p className="text-3xl">{quantity}</p>

                <button
                    onClick={() => {
                        if(quantity >= 5) return
                        setQuantity(quantity+1)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            <button
                onClick={() => {
                    handleAddOrder({...product, quantity})
                    handleClickModal()
                }}
                className="bg-amber-400 hover:bg-amber-600 px-5 py-2 mt-5 text-white font-bold uppercase rounded">
                {edit ? 'Guardar cambio' : 'Añadir el pedido'}
            </button>
        </div>
    </div>
  )
}
