import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href={"/"} className="">
      <Image src="/assets/logo.svg" width={100} height={100} alt="700 apps" />
    </Link>
  );
};

export default BrandLogo;