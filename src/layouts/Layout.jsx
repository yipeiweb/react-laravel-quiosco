import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from "../components/Sidebar";
import Summary from "../components/Summary";
import useQuiosco from "../hooks/useQuiosco";
import { ProductModal } from "../components/ProductModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement('#root')

export default function Layout() {
  const {modal, showSummary} = useQuiosco()
  return (
    <div className="md:flex">   
      <Sidebar />
      <main className="m-auto w-11/12 flex-1 h-screen p-3
                      overflow-y-scroll">
        <Outlet />
      </main>
      <div className="md:block hidden">
        <Summary />
      </div>

      <Modal
        isOpen={modal} 
        style={customStyles}
      >
        <ProductModal>

        </ProductModal>
      </Modal>

      <Modal
        isOpen={showSummary} 
        style={customStyles}
        overlayClassName="summary-modal"
      > 
        <Summary/> 
      </Modal>


      <ToastContainer/> 
    </div>
  )
}
