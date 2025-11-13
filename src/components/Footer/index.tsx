import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

// Interface das props do Footer
interface FooterProps {
  lastEditionUrl: string; // URL da última edição (não usado neste código)
  neiSimplifiedLogo: StaticImageData; // Logo simplificado do NEI
}

const Footer: FunctionComponent<FooterProps> = ({
  lastEditionUrl,
  neiSimplifiedLogo,
}) => {
  const currentYear = new Date().getFullYear(); // Ano atual dinâmico
  const NEI_WEBSITE_URL = "https://nei-isep.org"; // URL fixo do site NEI

  return (
    // Footer ocupa toda a largura, fundo preto, texto branco, altura adaptável com clamp
    <footer className="relative min-h-[clamp(294px,35vh,500px)] w-full bg-[#141414] text-white">
      {/* Bloco central: logo + ícones */}
      <div className="absolute inset-0 flex flex-col items-center justify-between px-[11vw] md:flex-row">
        {/* Logo à esquerda adaptável */}
        <a
          href={NEI_WEBSITE_URL}
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:scale-105"
        >
          <Image
            src={neiSimplifiedLogo}
            alt="Logo curto do NEI"
            className="h-auto drop-shadow-xl"
            style={{
              width: "clamp(280px, 21vw, 340px)", // largura proporcional, mantém ~320px
            }}
          />
        </a>

        {/* Ícones à direita adaptáveis */}
        <div className="flex items-center gap-[1vw]">
          <Link
            href="https://www.linkedin.com/company/nei-isep"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="transition-all hover:scale-110"
          >
            <RiLinkedinBoxFill
              style={{
                width: "clamp(50px, 4vw, 58px)",
                height: "clamp(50px, 4vw, 58px)",
              }}
            />
          </Link>
          <Link
            href="https://www.facebook.com/nei.isep"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            className="transition-all hover:scale-110"
          >
            <RiFacebookCircleFill
              style={{
                width: "clamp(45px, 3.5vw, 50px)",
                height: "clamp(45px, 3.5vw, 50px)",
              }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/nei_isep"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="transition-all hover:scale-110"
          >
            <RiInstagramLine
              style={{
                width: "clamp(45px, 3.5vw, 49px)",
                height: "clamp(45px, 3.5vw, 49px)",
              }}
            />
          </Link>
          <Link
            href="https://x.com/nei_isep"
            target="_blank"
            rel="noreferrer"
            title="X"
            className="transition-all hover:scale-110"
          >
            <RiTwitterXFill
              style={{
                width: "clamp(44px, 3.5vw, 48px)",
                height: "clamp(44px, 3.5vw, 48px)",
              }}
            />
          </Link>
          <Link
            href="https://linktr.ee/nei_isep"
            target="_blank"
            rel="noreferrer"
            title="Linktree"
            className="transition-all hover:scale-110"
          >
            <FaLink
              style={{
                width: "clamp(45px, 3.5vw, 49px)",
                height: "clamp(45px, 3.5vw, 49px)",
              }}
            />
          </Link>
        </div>
      </div>

      {/* Texto inferior fixo ao fundo */}
      <div className="absolute bottom-[5.5vh] w-full">
        <p
          className="text-center text-gray-500"
          style={{
            fontFamily: "Inter", // fonte Inter
            fontWeight: 400, // peso regular
            fontStyle: "normal", // estilo normal
            fontSize: "clamp(16px, 1.05vw, 22px)", // tamanho adaptável ao monitor
            lineHeight: "200%", // espaçamento vertical
            letterSpacing: "-0.045em", // espaçamento entre letras (-4.5%)
          }}
        >
          Copyright (c) {currentYear}. All rights reserved.
        </p>
      </div>
      <div className="flex w-full justify-center pb-6">
        <p className="text-secondary text-sm !font-normal select-none sm:text-base">
          Copyright &copy; {currentYear} NEI-ISEP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
