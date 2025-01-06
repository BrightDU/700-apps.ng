import Link from "next/link";
import BrandLogo from "./brand-logo";

type PropsNav = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Navbar = ({ isOpen, setIsOpen }: PropsNav) => {
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    return ( 
<<<<<<< HEAD
        <nav className="bg-[#F4F4F4] w-full fixed z-[999999999]">
            <div className="bg-[#F4F4F4] container mx-auto w-full flex justify-between border-b border-b-[#D6DAE1] items-center px-4 py-[20px] md:py-[50px]">
=======
        <nav className="container  mx-auto flex justify-between border-b border-b-[#D6DAE1] items-center py-[50px]">
>>>>>>> 254348c75fb67869042614e956d63c0ac2d8ea31
            <BrandLogo />
            <div className="cursor-pointer w-[30px] p-3 z-[999999] h-[30px] relative md:hidden flex items-center justify-center" onClick={toggleMenu}>
                    <motion.div
                         className={`absolute right-0 ${isOpen ? "bg-black" : "bg-black"} z-[99999] md:w-[42px] w-[20px] h-[2px] md:h-[4px]`}
                        initial={false}
                        animate={{
                            rotate: isOpen ? 45 : 0,
                            y: isOpen ? 0 : 5,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        style={{
                            borderRadius: "2px",
                        }}
                    />
                    <motion.div
                        className={`absolute right-0 ${isOpen ? "bg-black" : "bg-black"} z-[99999] md:w-[42px] w-[20px] h-[2px] md:h-[4px]`}
                        initial={false}
                        animate={{
                            rotate: isOpen ? -45 : 0,
                            y: isOpen ? 0 : -5,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        style={{
                            borderRadius: "2px",
                        }}
                    />
                </div>
            <ul className="font-semibold hidden text-base md:flex items-center">
                <li className="px-[30px] py-[10px] border-b border-r border-r-[#D6DAE1] border-b-[#D6DAE1]">Welcome</li>
                <li className="px-[30px] py-[10px] border-b border-r border-r-[#D6DAE1] border-b-[#D6DAE1]"> <Link href="#about">About us</Link></li>
                <li className="px-[30px] py-[10px] border-b border-r border-r-[#D6DAE1] border-b-[#D6DAE1]"><Link href="#services">Services</Link></li>
                <li className="px-[30px] py-[10px] border-b border-r border-r-[#D6DAE1] border-b-[#D6DAE1]"><Link href="#gallery">Gallery</Link></li>
                <li className="px-[30px] py-[10px] border-b border-b-[#D6DAE1]"><Link href="#contact">Contact us</Link></li>
            </ul>
            </div>
        </nav>
     );
}

import { motion } from "motion/react";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({isOpen, setIsOpen}: Props) {

    return (
        <motion.aside 
        className="fixed right-0 top-0 z-[0] bg-[#e7e5dd] py-[83px] md:px-[100px] px-[36px] w-full h-screen"
        initial={{
            x: 1000
        }}
        animate={{
            x: isOpen ? 0 : 2000
        }}
        transition={{
             type: "tween"
        }}
        
        >
            <div className="flex items-end w-full justify-end">
            </div>
            <div className="flex flex-col max-w-fit items-center w-full mt-[30px] md:mt-0 mx-auto text-[48px] font-extralight gap-[20px]">
                {["Welcome", "About us", "Services", "Gallery", "Contact Us"].map((text) => (
                    <div  key={Math.random()}>
                        <p className="cursor-pointer hover:italic hover:underline text-[#000000]">{text}</p>
                    </div>
                ))}

            </div>
        </motion.aside>
    );
}