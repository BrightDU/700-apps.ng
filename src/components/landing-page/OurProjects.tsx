import { projects } from "@/data/projects";
import Image from "next/image";

export const OurProjects = () => {
    return (
        <section className=" mx-auto ">
            <div className="bg-[#02A4EF] py-[120px] md:gap-[232px] gap-12 flex md:flex-row flex-col items-center justify-center md:rounded-t-[96px] rounded-t-[56px]">
                <p className="text-white text-[25px] md:text-[32px]/[48px] font-bold">Innovate. Integrate. Elevate. <br />
                    Discover your customized  <br />
                    technology solution</p>
                <div className="relative">
                    <Image src="/assets/grommet.svg" width={27} height={27} alt="left" className="absolute left-0 top-0 bottom-0 my-auto" />
                    <p className="text-white text-[20px] md:text-[24px]/[24px] font-semibold">Connect with us now</p>
                </div>
            </div>
            <div className="flex flex-col mt-[64px]">
                <h2 className="text-[#006494] text-[30px] md:text-[48px]/[54px] text-center font-semibold mb-[13px]">Our Projects</h2>
                <p className=" text-center font-medium text-[20px] md:text-[32px]/[40px]">Explore how we&apos;ve helped businesses <br />
                like yours achieve their goals</p>

                <div className="flex flex-col md:flex-row items-center justify-between mt-[107px]">
                    {projects.map(project => (
                        <Project {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

type CardType = {
    img: string;
    title: string;
    text: string;
}
const Project = ({img, title, text}: CardType) => {
    return (
        <div>
            <div className="flex flex-col items-start justify-center gap-2 max-w-[360px]">
            <Image src={img} width={386} height={353} alt={title}/>
            <p className="text-base font-semibold">{title}</p>
            <p className="text-[14px]/[20px] font-medium text-[#717171] max-w-fit">{text}</p>
        </div>
        </div>
    );
}