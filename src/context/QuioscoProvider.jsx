import { useEffect, createContext, useState } from "react";
import { toast } from "react-toastify";
import { categories as categoriesDB } from "../data/categories";

const QuioscoContext =  createContext();

const QuioscoProvider = ({children}) => {
    const [categories, setCategories] = useState(categoriesDB)
    const [currentCategory, setCurrentCategory] = useState(categories[0])
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [orders, setOrders] = useState([])
    const [total, setTotal] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [showSummary, setShowSummary] = useState(false)
    const [showOpenSummaryButton, setshowOpenSummaryButton] = useState(true)

    useEffect(() => {
        const newTotal = orders.reduce((total, product) => 
            (product.price * product.quantity) + total, 0
        )
        setTotal(newTotal)
    }, [orders])
    

    const handleClickCategory = id => {
        const category = categories.filter(item => item.id === id)[0]
        setCurrentCategory(category)
    }
    const handleClickModal = () => {
        setModal(!modal)
        setshowOpenSummaryButton(!showOpenSummaryButton)
    }
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
        setshowOpenSummaryButton(!showOpenSummaryButton)
    }
    const handleShowSummary = () => {
        setShowSummary(!showSummary)
        setshowOpenSummaryButton(!showOpenSummaryButton)
    }
    const handleSetProduct = item => {
        setProduct(item)
    }
    const handleAddOrder = ({category_id, ...product}) => {
        if(orders.some(orderState => 
            orderState.id === product.id)
        ) {
            const updatedOrder = orders.map(orderState => 
                orderState.id === product.id
                    ? product : orderState
            )
            setOrders(updatedOrder)
            toast.success('Pedido actualizado')
            return
        } 

        setOrders([...orders, product])
        toast.success('Pedido añadido')
        setshowOpenSummaryButton(true)
    }
    const handleEditQuantity = id => {
        setShowSummary(false)
        const productUpdate = orders.filter(product => product.id === id)[0]
        setProduct(productUpdate)
        setModal(!modal)
    }
    const handleDeleteOrderProduct = id => {
        const updatedOrders = orders.filter(product => product.id !== id)
        setOrders(updatedOrders)
        toast.success('Pedido eliminado')
    }
    const handleConfirmOrders = (e) => {
        e.preventDefault()
        setOrders([])
        setShowSummary(false)
        setshowOpenSummaryButton(!showOpenSummaryButton)
        toast.success('Pedido confirmado')
        setshowOpenSummaryButton(true)
    }

    return (
        <QuioscoContext.Provider
            value={{
                categories, currentCategory,
                modal, product, orders, total, 
                showMenu,showSummary, showOpenSummaryButton,

                handleClickCategory, handleClickModal,
                handleSetProduct, handleAddOrder,
                handleEditQuantity, handleDeleteOrderProduct,
                handleConfirmOrders, handleShowMenu,
                handleShowSummary
            }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext