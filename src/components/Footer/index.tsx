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
    <footer className="w-full bg-[#141414] text-white relative min-h-[clamp(294px,35vh,500px)]">
      
      {/* Bloco central: logo + ícones */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-[11vw]">
        
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
            className="drop-shadow-xl h-auto"
            style={{
              width: "clamp(280px, 21vw, 340px)", // largura proporcional, mantém ~320px
            }}
          />
        </a>

        {/* Ícones à direita adaptáveis */}
        <div className="flex items-center gap-[1vw]">
          <Link href="https://www.linkedin.com/company/nei-isep" target="_blank" rel="noreferrer" title="LinkedIn" className="hover:scale-110 transition-all">
            <RiLinkedinBoxFill style={{ width: "clamp(50px, 4vw, 58px)", height: "clamp(50px, 4vw, 58px)" }} />
          </Link>
          <Link href="https://www.facebook.com/nei.isep" target="_blank" rel="noreferrer" title="Facebook" className="hover:scale-110 transition-all">
            <RiFacebookCircleFill style={{ width: "clamp(45px, 3.5vw, 50px)", height: "clamp(45px, 3.5vw, 50px)" }} />
          </Link>
          <Link href="https://www.instagram.com/nei_isep" target="_blank" rel="noreferrer" title="Instagram" className="hover:scale-110 transition-all">
            <RiInstagramLine style={{ width: "clamp(45px, 3.5vw, 49px)", height: "clamp(45px, 3.5vw, 49px)" }} />
          </Link>
          <Link href="https://x.com/nei_isep" target="_blank" rel="noreferrer" title="X" className="hover:scale-110 transition-all">
            <RiTwitterXFill style={{ width: "clamp(44px, 3.5vw, 48px)", height: "clamp(44px, 3.5vw, 48px)" }} />
          </Link>
          <Link href="https://linktr.ee/nei_isep" target="_blank" rel="noreferrer" title="Linktree" className="hover:scale-110 transition-all">
            <FaLink style={{ width: "clamp(45px, 3.5vw, 49px)", height: "clamp(45px, 3.5vw, 49px)" }} />
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
    </footer>
  );
};

export default Footer;