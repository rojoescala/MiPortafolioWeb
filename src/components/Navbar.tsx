import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/LogoRJ.png'
import Modal from "./Modal";
import Contact from "../Contact";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(prev => !prev)

    return (
        <>
            <nav className="w-full fixed bg-black z-50 border-b-4 border-yellow-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={`/`} className="flex items-center space-x-6 rtl:space-x-reverse">
                        <img src={logo} className="h-10" alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">My Portfolio</span>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="flex items-center p-2 w-8 h-8 justify-center text-sm rounded-lg text-white hover:bg-yellow-800 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto sm:border-0 border-t-4 mt-4 border-yellow-900 ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                        <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x md:mt-0 md:border-0 md:justify-center w-full">
                            <li className="flex justify-center w-full">
                                <Link to={`/`} className="flex items-center py-2 px-2 bg-transparent border-0 text-white hover:text-yellow-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill mx-2" viewBox="0 0 16 16">
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li className="flex justify-center w-full">
                                <div onClick={toggleModal} className="flex items-center py-2 px-2 bg-transparent border-0 text-white hover:text-yellow-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill mx-2" viewBox="0 0 16 16">
                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                    Contact
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            <Modal isOpen={isModalOpen} onToggle={toggleModal}>
                <Contact/>
            </Modal>
        </>
    );
}

export default Navbar;
