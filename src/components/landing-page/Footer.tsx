import Image from "next/image";
import { Button } from "../ui/button";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-[#01628F] bg-gradient-to-r from-[#02A4EF] to-[#001C29] py-[200px] px-[72px]">
            <div className="flex justify-between items-start text-white">
            <Image src="/assets/footerlogoo.png" width={147} height={151} alt="logo" draggable={false} className=""/>
            <ul className="flex flex-col text-white text-[30px]/[28px] gap-6">
                <li>About 700Apps</li>
                <li>Our Services</li>
                <li>Our Projects</li>
                <li>Blog</li>
                <li>Gallery</li>
            </ul>
            <ul className="flex flex-col text-[22px]/[28px] gap-[36px] font-medium">
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
            <div className="flex items-center text-white justify-between mt-[226px]">
                <p>© 2025 Copyright 700apps.ng. All Rights Reserved.</p>
                <div className="flex items-center gap-[24px]">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}