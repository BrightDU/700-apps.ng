import Image from "next/image";
import Marquee from "../ui/marquee";

export const Customers = () => {
    return (
        <section className="md:mt-[256px] mt-10 flex flex-col md:mb-[300px] mb-7 items-center">
            <div className="relative">
                <div className="border-b-[#000000] border-b w-[80%] mx-auto left-0 right-0 h-1 absolute bottom-0 top-0  my-auto"></div>
                <h2 className="text-[#4D4D4D] text-[25px] md:text-[40px]/[44px] font-semibold text-center z-[50] relative w-[350px] mx-auto bg-[#F4F4F4] ">Our customers</h2>
            </div>
            <p className="text-[17px] md:text-[22px]/[28px] text-[#717171] text-center font-normal">Here at 700-Apps we have offered our services to over 500+ customers.</p>
            <Marquee className="mt-[28px] min-w-full">
            <Image src="/assets/clients.png" width={1400} height={140} alt="customers" className="min-w-full"/>
            </Marquee>
        </section>
    );
}