import { services } from "@/data/services";
import Image from "next/image";

export const Services = () => {
    return (
        <section className="mt-[128px]" id="services">
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
        <div className="h-[480px]">
            <div className="bg-">
                <Image src={img} width={27} height={27} alt="left" />
                <h3>{title}</h3>
            </div>
            <p className="mt-6 text-center">{text}</p>
        </div>
    );
}