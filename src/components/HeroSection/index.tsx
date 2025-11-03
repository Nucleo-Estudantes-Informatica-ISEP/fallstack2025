"use client";

import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import { Countdown } from "@/components/Countdown"; 

export function HeroSection() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Data fixa: 25 de Novembro de 2025
  const targetDate = "2025-11-25T00:00:00";

  return (
    <section 
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/landingbackground.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      {/* Container principal com flex column para posicionar o timer na parte inferior */}
      <div className="z-10 flex h-full w-full flex-col items-center justify-between">
        <div className="flex-1"></div>
        
        {/* Timer posicionado na parte inferior */}
        <div className="w-full pb-25">
          <Countdown targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
}