import { useEffect, useRef } from "react";

interface ModalProps {
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onToggle, children }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onToggle();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onToggle]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
            <div
                ref={modalRef}
                className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 shadow-lg relative w-11/12 max-w-lg"
            >
                <button className="absolute top-3 right-3 text-white text-2xl hover:text-gray-400" onClick={onToggle}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
