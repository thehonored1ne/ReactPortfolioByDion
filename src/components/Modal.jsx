import { useRef, FontAwesomeIcon, faXmark, win95Styles, FileIcons, Draggable } from '../imports/organizedIndex'

const Modal = ({modalId, children, title, className = "", isOpen, onClose, defaultPosition = { x: 50, y: 50 }, focusedModal, setFocusedModal }) => {

    const nodeRef = useRef(null);

    if (!isOpen) return null;

    const isFocused = focusedModal === modalId;

    return (
        
        <Draggable 
            nodeRef={nodeRef} 
            handle=".modal-header"
            bounds="parent" 
            defaultPosition={defaultPosition}
            onStart={() => setFocusedModal(modalId)}
            cancel=".no-drag"
        >

            <div 
                ref={nodeRef} 
                onMouseDown={(e) => {
                    e.stopPropagation();
                    setFocusedModal(modalId);
                }} className={win95Styles.modal.wrapper} style={{ touchAction: 'none', zIndex: isFocused ? 100 : 50 }}
            >

                <div className={`${win95Styles.modal.container} ${className}`}>
                    
                    <div className={`${win95Styles.modal.header} ${isFocused ? 'bg-blue-800' : 'bg-gray-500'}`}>
                        
                        <img src={FileIcons.infoIcon} className="size-5" alt="icon" />
                        <span className={win95Styles.modal.title}>{title}</span>
                        
                        <button 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                onClose();
                            }}
                            className={`${win95Styles.modal.button} no-drag`}
                        >
                            <FontAwesomeIcon icon={faXmark} className="text-xs"/>
                        </button>
                    </div>

                    <div className={win95Styles.modal.child}>
                        {children}
                    </div>

                </div>
            </div>
            
        </Draggable>
    );
}

export default Modal;