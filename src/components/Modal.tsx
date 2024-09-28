interface ModalProps {
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onToggle, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 shadow-lg relative w-11/12 max-w-lg">
                <button className="absolute top-3 right-3 text-white text-2xl hover:text-yellow-800" onClick={onToggle}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal
