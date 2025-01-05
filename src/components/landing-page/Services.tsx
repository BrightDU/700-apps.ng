import { services } from "@/data/services";
import Image from "next/image";

export const Services = () => {
    return (
        <section className="mt-[128px] mb-[168px]" id="services">
            <div className="flex items-center justify-between">
                <h2 className="text-[30px]/[54px] font-bold">Services we offer</h2>
                <div className="flex items-center gap-[14px]">
                    <button className="py-[10px] px-[17px] border-[0.7px] border-[#484848] rounded-[8px]">
                        <Image src="/assets/arrow_forward.svg" width={27} height={27} alt="left" />

                    </button>
                    <button className="py-[10px] px-[17px] border-[0.7px] border-[#484848] rounded-[8px]">
                        <Image src="/assets/arrow_right.svg" width={27} height={27} alt="left" />

                    </button>
                </div>
            </div>
            <div className="flex gap-12">

            {services.map((service) => (
                <Service {...service}/>
            ))}
            </div>
        </section>
    );
}
type ServiceType = {
    img: string;
    title: string;
    text: string;
}
const Service = ({ img, title, text }: ServiceType) => {
    return (
        <div className="h-[480px] w-[480px] bg-white">
            <div className=" bg-gradient-to-b from-[#D9D9D9] bg-blend-overlay to-[#006494] relative">
                <Image src={img} width={405} height={245} alt="img" />
                <h3 className="text-[#F4F4F4] text-[28px]/[36px] font-bold absolute left-10 bottom-10">{title}</h3>
            </div>
            <p className="mt-6 text-center">{text}</p>
        </div>
    );
}