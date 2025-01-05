import { services } from "@/data/services";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export const Services = () => {
    const [showOffers, setShowOffers] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        // Move to the next set of 3 items
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= services.length ? 0 : prevIndex + 3
        );
    };

    const handlePrev = () => {
        // Move to the previous set of 3 items
        setCurrentIndex((prevIndex) =>
            prevIndex - 3 < 0 ? services.length - 3 : prevIndex - 3
        );
    };
    return (
        <section className="mt-[128px] container px-5 mx-auto mb-[168px]" id="services">
            <div className="flex items-center justify-between">
                <h2 className="text-[30px]/[54px] font-bold">Services we offer</h2>
                <div className="flex items-center gap-[14px]">
                    <button onClick={handlePrev} className={`${currentIndex == 0 ? "invisible" : ""} py-[10px] px-[17px] border-[0.7px] border-[#484848] rounded-[8px]`} >
                        <Image src="/assets/arrow_forward.svg" width={27} height={27} alt="left" />

                    </button>
                    <button onClick={handleNext} className={`${currentIndex !== 0 ? "invisible" : ""
                        } md:block hidden py-[10px] px-[17px] border-[0.7px] border-[#484848] rounded-[8px]`} >
                        <Image src="/assets/arrow_right.svg" width={27} height={27} alt="left" />

                    </button>
                </div>
            </div>
            <div className="flex gap-12">

                <div className="flex w-full md:overflow-hidden overflow-scroll">
                    <motion.div
                        className="flex justify-between "
                        initial={{ x: 0 }}
                        animate={{ x: -currentIndex * 44 + "%" }}
                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                        style={{ gap: "20px", width: `1000px` }}
                    >
                        {services.map((service) => (
                            <Service {...service} />
                        ))}
                    </motion.div>
                </div>
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
            <div className="relative w-[405px] h-[245px]">
                {/* Image */}
                <Image
                    src={img}
                    alt="img"
                    fill
                    className="absolute inset-0 object-cover z-0"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/50 to-[#006494]/70 z-10"></div>

                {/* Title */}
                <h3 className="absolute left-10 bottom-10 text-[#F4F4F4] text-[28px]/[36px] font-bold z-20">
                    {title}
                </h3>
            </div>
            <p className="mt-6 text-center">{text}</p>
        </div>
    );
}