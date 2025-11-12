import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { FaLink } from "react-icons/fa6";

interface FooterProps {
  lastEditionUrl: string;
  neiSimplifiedLogo: StaticImageData;
}

const Footer: FunctionComponent<FooterProps> = ({
  lastEditionUrl,
  neiSimplifiedLogo,
}) => {
  const currentYear = new Date().getFullYear();
  const NEI_WEBSITE_URL = "https://nei-isep.org";

  return (
    // h-[294px] → altura total do footer
    // w-full → ocupa toda a largura
    // py-6 → padding vertical
    <footer className="h-[294px] w-full bg-[#141414] text-white flex flex-col justify-between py-6 relative">
      
      {/* flex-grow → este bloco ocupa o espaço disponível dentro do footer */}
      <div className="flex items-center justify-center flex-grow relative mt-[25px]">
        
        {/* Logo: tamanho e posição */}
        {/* -translate-x-[135%] → deslocamento horizontal manual
            width={320} height={320} → tamanho da imagem */}
        <a
          href={NEI_WEBSITE_URL}
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:scale-105 absolute left -translate-x-[135%]"
        >
          <Image
            width={320}
            height={320}
            src={neiSimplifiedLogo}
            alt="Logo curto do NEI"
            className="drop-shadow-xl"
          />
        </a>

        {/* Ícones à direita */}
        {/* right-[170px] → distância da borda direita
            gap-4 → espaçamento horizontal entre ícones */}
        <div className="absolute right-[170px] flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/nei-isep"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="hover:scale-110 transition-all"
          >
            {/* size={58} → tamanho do ícone */}
            <RiLinkedinBoxFill size={58} />
          </Link>

          <Link
            href="https://www.facebook.com/nei.isep"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            className="hover:scale-110 transition-all"
          >
            {/* size={50} → tamanho do ícone */}
            <RiFacebookCircleFill size={50} />
          </Link>
        
          <Link
            href="https://www.instagram.com/nei_isep"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="hover:scale-110 transition-all"
          >
            {/* size={49} → tamanho do ícone */}
            <RiInstagramLine size={49} />
          </Link>

          <Link
            href="https://x.com/nei_isep"
            target="_blank"
            rel="noreferrer"
            title="X"
            className="hover:scale-110 transition-all"
          >
            {/* size={48} → tamanho do ícone */}
            <RiTwitterXFill size={48} />
          </Link>

          <Link
            href="https://linktr.ee/nei_isep?fbclid=PAdGRzdgOAq1JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaf5ctadc2-VAPEo2ph7ojuXPLbbQRuocTGN1-CYtgYHvxkj9HT2AiQi4XVKug_aem_1WJmtyUXjpjVlpwYYlXY9Q"
            target="_blank"
            rel="noreferrer"
            title="Linktree"
            className="hover:scale-110 transition-all"
          >
            {/* size={49} → tamanho do ícone */}
            <FaLink size={49} />
          </Link>
        </div>
      </div>

      {/* Texto inferior */}
      {/* text-[17px] → tamanho do texto */}
      <div className="">
        <p className="text-center text-gray-500 text-sm text-[17px]">
          Copyright (c) {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
