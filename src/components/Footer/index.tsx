import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaInfo } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

import InstallButton from "../InstallButton";

interface FooterProps {
  lastEditionUrl: string;
  neiLogoSrc: StaticImageData;
}

const Footer: FunctionComponent<FooterProps> = ({
  lastEditionUrl,
  neiLogoSrc,
}) => {
  const currentYear = new Date().getFullYear();
  const NEI_WEBSITE_URL = "https://nei-isep.org";

  return (
    <footer className="bg-background flex w-full flex-col items-center text-center">
      <div className="flex w-full items-center justify-around lg:m-8">
        <div className="mx-8 my-4 max-h-[200px] max-w-[200px] transition-all duration-300 hover:scale-105 sm:max-w-[275px] lg:max-w-[350px]">
          <a href={NEI_WEBSITE_URL} target="_blank" rel="noreferrer">
            <Image
              className="mx-auto block h-auto max-w-full drop-shadow-xl transition-all duration-300 hover:drop-shadow-2xl"
              src={neiLogoSrc}
              alt="Logo branco do Núcleo de Estudantes de Informática do ISEP (NEI)"
            />
          </a>
        </div>
        <div className="flex justify-between px-5 md:items-center md:gap-x-5 md:px-0 lg:pr-20">
          <div className="flex gap-5">
            <Link
              className="text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              href="https://www.linkedin.com/company/nei-isep"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <RiLinkedinBoxFill color="text" size={48} />
            </Link>
            <Link
              className="text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              href="https://www.facebook.com/nei.isep"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <RiFacebookCircleFill color="text" size={45} />
            </Link>
            <Link
              className="text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              href="https://www.instagram.com/nei_isep"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <RiInstagramLine color="accent" size={45} />
            </Link>
            <Link
              className="text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              href="https://twitter.com/nei_isep"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <RiTwitterXFill color="text" size={45} />
            </Link>
          </div>
          <div className="right-0 flex gap-5">
            <InstallButton />
            <Link
              href="/privacy-policy"
              title="Política de Privacidade"
              className="text-xl"
            >
              <MdOutlinePrivacyTip color="text" size={45} />
            </Link>
            <Link
              href="/about"
              className="h-max text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              title="Info"
            >
              <FaInfo size={45} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:pb-6">
        <p className="text-secondary right-10 pb-3 text-sm !font-normal select-none sm:text-center lg:pb-0 lg:pl-20">
          Copyright &copy; {currentYear} NEI-ISEP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
