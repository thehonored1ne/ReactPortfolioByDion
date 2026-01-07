import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';

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
        >

            <div 
                ref={nodeRef} 
                onMouseDown={(e) => {
                    e.stopPropagation();
                    setFocusedModal(modalId);
                }} className="absolute top-0 left-0" style={{ touchAction: 'none', zIndex: isFocused ? 100 : 50 }}
            >

                <div className={`bg-gray-300 w-80 md:w-130 text-black p-1 border-3 border-t-white border-l-white border-b-gray-800 border-r-gray-800 rounded-sm shadow-2xl ${className}`}>
                    
                    <div className={`modal-header flex items-center gap-2 p-1 text-white font-serif cursor-move select-none mb-1 ${isFocused ? 'bg-blue-800' : 'bg-gray-500'}`}>
                        
                        <img src="https://win98icons.alexmeub.com/icons/png/msg_information-0.png" className="size-5" alt="icon" />
                        <span className="flex-1 font-bold text-sm truncate">{title}</span>
                        
                        <button 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                onClose();
                            }}
                            className="bg-gray-300 text-black border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-1 hover:bg-gray-200 active:border-t-gray-800 active:border-l-gray-800 cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faXmark} className="text-xs"/>
                        </button>
                    </div>

                    <div className="overflow-auto max-h-[70vh] bg-gray-300">
                        {children}
                    </div>

                </div>
            </div>
            
        </Draggable>
    );
}

export default Modal;