import { useState } from '../imports/organizedIndex';

export const useWindowManager = () => {
    
    const [openModals, setOpenModals] = useState([]);
    const [focusedModal, setFocusedModal] = useState(null);

    const handleOpen = (id) => {
        if (!openModals.includes(id)) setOpenModals(prev => [...prev, id]);
        setFocusedModal(id);
    };

    const handleClose = (id) => {
        setOpenModals(prev => prev.filter(m => m !== id));
        if (focusedModal === id) setFocusedModal(null);
    };

    return { 
        openModals, 
        focusedModal, 
        setFocusedModal, 
        handleOpen, 
        handleClose 
    };
};