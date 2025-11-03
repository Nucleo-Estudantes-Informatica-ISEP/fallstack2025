// app/page.tsx - Landing page version
import { HeroSection } from "@/components/HeroSection";
import { CustomFooter } from "@/components/CustomFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomFooter />
    </>
  );
}