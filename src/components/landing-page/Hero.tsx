import Image from "next/image";
import { Button } from "../ui/button";

export const Hero = () => {
    return (
        <section className="container mx-auto flex md:flex-row flex-col items-center justify-between gap-10 pt-[100px] md:pt-[235px]">
            <div className="flex-1 justify-between max-w-[581px] inter text-center md:text-start">
            <h1 className="md:text-[64px]/[70px] text-[40px] font-bold text-[#006494]">Empower your business <br />
            with scalable <br /> solutions</h1>
            <p className="md:text-2xl text-lg font-normal mt-2 text-[#484848]">We tailor our solutions to your needs using world
            class products and advanced technology</p>
            <div className="flex gap-6 items-center justify-center mt-6">
                <Button className="py-3 md:py-[14px] w-[170px] md:w-[226px] rounded-[40px] md:rounded-[84px] font-semibold text-base h-full bg-[#006494] text-white">Dive deeper</Button>
                <Button className="py-3 md:py-[14px] w-[170px] md:w-[226px] rounded-[40px] md:rounded-[84px] font-semibold text-base h-full text-[#006494] border border-[#6E7882] bg-white">Schedule a call</Button>
            </div>
            </div>
            <div className="flex-1 w-full h-auto max-w-[350px] md:max-w-[500px]">
                <Image src="/assets/hero-asset.svg" width={400} height={200} alt="hero" className="w-full"/>
            </div>
        </section>
    );
}