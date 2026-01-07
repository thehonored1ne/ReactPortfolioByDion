import './App.css'
import Content from "./PortfolioContent"
import Footer from "./Footer"
import { useState } from 'react';

function App() {
    const [openModals, setOpenModals] = useState([]);

    const [focusedModal, setFocusedModal] = useState(null);

    const handleOpen = (id) => {
        if (!openModals.includes(id)) setOpenModals([...openModals, id]);
        setFocusedModal(id);
    };

    const handleClose = (id) => {
        setOpenModals(openModals.filter(m => m !== id));
        if (focusedModal === id) setFocusedModal(null);
    };

    return (
        <div className="flex flex-col h-screen w-full overflow-hidden">

            <div className="flex-1 relative">
                <Content 
                    openModals={openModals} 
                    handleOpen={handleOpen} 
                    handleClose={handleClose}
                    focusedModal={focusedModal}
                    setFocusedModal={setFocusedModal}
                />
            </div>
            
            <div className="h-12 md:h-10">
                <Footer openModals={openModals} focusedModal={focusedModal} />
            </div>
        </div>
    )
}

export default App