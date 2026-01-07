import './App.css'
import Content from "./PortfolioContent"
import Footer from "./Footer"
import React, { useState } from 'react';

function App() {
    const [openModals, setOpenModals] = useState([]);
    // 1. Add state to track which window is focused
    const [focusedModal, setFocusedModal] = useState(null);

    const handleOpen = (id) => {
        if (!openModals.includes(id)) setOpenModals([...openModals, id]);
        setFocusedModal(id); // 2. Focus the window when it opens
    };

    const handleClose = (id) => {
        setOpenModals(openModals.filter(m => m !== id));
        if (focusedModal === id) setFocusedModal(null);
    };

    return (
        <div className="flex flex-col h-screen w-full overflow-hidden">
            {/* 1. Pass everything to Content so it can open/close windows */}
            <div className="flex-1 relative">
                <Content 
                    openModals={openModals} 
                    handleOpen={handleOpen} 
                    handleClose={handleClose}
                    focusedModal={focusedModal}
                    setFocusedModal={setFocusedModal}
                />
            </div>
            
            {/* 2. Pass openModals to Footer so it can show the tabs */}
            <div className="h-12 md:h-10">
                <Footer openModals={openModals} focusedModal={focusedModal} />
            </div>
        </div>
    )
}

export default App