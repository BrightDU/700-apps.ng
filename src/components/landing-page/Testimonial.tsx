import Image from "next/image";

export const Testimonial = () => {
    return (
        <section className="bg-[#F4F4F4] rounded-t-[96px] py-[128px] px-[72px] pb-[256px]">
            <h2 className="text-[30px]/[34px] font-bold text-[#484848]">Testimonial from <span className="text-[#006494]">Partners</span></h2>
            <p className="text-[25px] md:text-[36px]/[54px] font-normal text-[#4D4D4D] mt-[64px] max-w-[1140px]">
                "I was skeptical about switching IT providers, but their hands-on approach won me over. When our servers crashed during peak season, their team was on it within minutes and had us back up running before we lost any business. That level of reliability is priceless."
            </p>
            <div className="flex items-center justify-between mt-[107px]">
                <div className="flex items-center">
                    {/* <Image src="/assets/" width={120} height={120} alt="" /> */}
                    <div className="text-[#484848] text-[22px]/[28px] ">
                        <h3 className="font-semibold">Aisha Asemota</h3>
                        <p className="font-normal">Pwc Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="flex items-center gap-[14px]">
                    <button className="py-[10px] px-[17px] border-[0.7px] border-[#484848] rounded-[8px]">
                        <Image src="/assets/arrow_forward.svg" width={27} height={27} alt="left" />

                    </button>
                    <button className="py-[10px] px-[17px] border-[0.7px] border-[#484848] rounded-[8px]">
                        <Image src="/assets/arrow_right.svg" width={27} height={27} alt="left" />

                    </button>
                </div>
            </div>
        </section>
    );
}