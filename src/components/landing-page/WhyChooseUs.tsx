import { whychooseus } from "@/data/whychooseus";
import Image from "next/image";

export const WhyChooseUs = () => {
    return (
        <section className="pt-[188px] px-[72px] rounded-t-[96px] bg-white pb-[128px]" >
            <h2 className="text-[30px]/[32px] font-bold text-[#4D4D4D] text-center mb-[64px]">Why Choose Us?</h2>
            <div className="flex flex-wrap gap-[20px] gap-y-32 items-center justify-center">
            {whychooseus.map(item => (
                <Card {...item}/>
            ))}
            </div>
        </section>
    );
}

type CardType = {
    icon: string;
    title: string;
    text: string;
}
const Card = ({icon, title, text}: CardType) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 max-w-[360px]">
            <Image src={icon} width={27} height={27} alt={title}/>
            <p className="text-[24px]/[36px] font-medium">{title}</p>
            <p className="text-[20px]/[30px] font-medium text-[#6C6C6C] max-w-fit text-center">{text}</p>
        </div>
    )
}