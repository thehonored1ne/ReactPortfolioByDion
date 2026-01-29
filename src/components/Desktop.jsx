import { Content, Footer, useWindowManager } from '../imports/organizedIndex'

const Desktop = () => {
    const { openModals, focusedModal, setFocusedModal, handleOpen, handleClose } = useWindowManager();

    return (
        <div className="flex flex-col h-screen w-full overflow-hidden bg">
            <div className="flex-1 relative">
                <Content 
                    openModals={openModals} 
                    handleOpen={handleOpen} 
                    handleClose={handleClose}
                    focusedModal={focusedModal}
                    setFocusedModal={setFocusedModal}
                />
            </div>
            
            <div className="h-15 hidden md:block">
                <Footer openModals={openModals} focusedModal={focusedModal} />
            </div>
        </div>
    );
};

export default Desktop;