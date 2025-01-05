import Image from "next/image";
import { Button } from "../ui/button";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-[#01628F] bg-gradient-to-r from-[#02A4EF] to-[#001C29] md:py-[200px] py-10 md:px-[72px] px-[30px]">
            <div className="flex flex-col md:flex-row gap-5 justify-between items-start text-white">
            <Image src="/assets/footerlogoo.png" width={147} height={151} alt="logo" draggable={false} className=""/>
            <ul className="flex flex-col text-white text-[18px] md:text-[30px]/[28px] gap-2 md:gap-6">
                <li>About 700Apps</li>
                <li>Our Services</li>
                <li>Our Projects</li>
                <li>Blog</li>
                <li>Gallery</li>
            </ul>
            <ul className="flex flex-col text-[18px] md:text-[22px]/[28px] gap-[36px] font-medium">
                <li>Ready to elevate your IT strategy? <br />
                <span className="text-[#FFBA02]">Contact us</span> today for consultation!</li>
                <li>
                Email <br />info@700-apps.ng
                </li>
                <li>
                Phone <br />
                +2349047821309 <br />
                +966509153401
                </li>
                <li>
                    <Button className="w-[226px] py-[14px] h-full bg-[#02A4EF] text-white text-[16px]/[24px] font-semibold rounded-[84px]">Contact us</Button>
                </li>
            </ul>
            </div>
            <div className="flex flex-col md:flex-row items-center text-white justify-between md:mt-[226px] mt-[30px]">
                <p className="text-center">© 2025 Copyright 700apps.ng. All Rights Reserved.</p>
                <div className="flex items-center gap-[24px]">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}