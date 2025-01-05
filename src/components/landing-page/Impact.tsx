import { impact } from "@/data/impact";

export const Impact = () => {
    return (
        <section className="">
            <div className="w-full h-1 border-b border-black mb-[58px]"></div>

            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-[30px]/[34px] font-bold">Reflecting on our <span className="text-[#006494]">Journey</span></h2>
                    <p className="text-[22px]/[28px] font-normal text-[#484848]">The impact we&apos;ve made so far</p>
                </div>
                <div className=" grid grid-cols-2 gap-20">
                    {impact.map(item => (
                        <ImpactItem {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

type ImpactType = {
    number: number;
    label: string;
}

const ImpactItem = ({number, label}: ImpactType) => {
    return (
        <div className="flex flex-col gap-[20px]">
            <p className="bebas-neue-regular text-[81px]/[45px] font-normal text-[#484848]">{number.toLocaleString('en-US')}</p>
            <p className="text-[22px]/[28px] font-normal text-[#6C6C6C]">{label}</p>
        </div>
    );
}