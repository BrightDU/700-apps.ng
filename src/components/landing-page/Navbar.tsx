import Link from "next/link";
import BrandLogo from "./brand-logo";

export const Navbar = () => {
    return ( 
        <nav className="container  mx-auto flex justify-between border-b border-b-[#D6DAE1] items-center py-[50px]">
            <BrandLogo />
            <ul className="font-semibold text-base flex items-center">
                <li className="px-[30px] py-[10px] border-b border-r border-r-[#D6DAE1] border-b-[#D6DAE1]">Welcome</li>
                <li className="px-[30px] py-[10px] border-b border-r border-r-[#D6DAE1] border-b-[#D6DAE1]"> <Link href="#about">About us</Link></li>
                <li className="px-[30px] py-[10px] border-b border-r border-r-[#D6DAE1] border-b-[#D6DAE1]"><Link href="#services">Services</Link></li>
                <li className="px-[30px] py-[10px] border-b border-r border-r-[#D6DAE1] border-b-[#D6DAE1]"><Link href="#gallery">Gallery</Link></li>
                <li className="px-[30px] py-[10px] border-b border-b-[#D6DAE1]"><Link href="#contact">Contact us</Link></li>
            </ul>
        </nav>
     );
}