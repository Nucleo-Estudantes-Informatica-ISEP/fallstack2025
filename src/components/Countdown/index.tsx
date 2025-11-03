"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      expired: false
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        expired: false
      };
    } else {
      timeLeft.expired = true;
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Formata os números em dígitos separados
  const daysDigits = timeLeft.days.toString().padStart(2, '0').split('');
  const hoursDigits = timeLeft.hours.toString().padStart(2, '0').split('');

  if (timeLeft.expired) {
    return (
      <div className="z-10 mt-8 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">Evento a decorrer!</span>
      </div>
    );
  }

  return (
    <div className="z-10 mt-8 flex flex-col items-center justify-center gap-6">
      {/* Timer com layout: [X][X] [DAYS] [X][X] [HOURS] */}
      <div className="flex items-center justify-center gap-8">
        {/* Dias */}
        <div className="flex items-center gap-3">
          {/* Dígitos dos dias */}
          <div className="flex gap-2">
            <div className="flex h-24 w-24 items-center justify-center bg-black/80 text-6xl font-coldvetica font-bold text-white border-2 border-white/30">
              {daysDigits[0]}
            </div>
            <div className="flex h-24 w-24 items-center justify-center bg-black/80 text-6xl font-coldvetica font-bold text-white border-2 border-white/30">
              {daysDigits[1]}
            </div>
          </div>
          {/* Label DAYS */}
          <div className="flex h-24 w-28 items-center justify-center bg-black/80 border-2 border-white/30">
            <span className="text-4xl font-coldvetica font-bold text-white">days</span>
          </div>
        </div>

        {/* Horas */}
        <div className="flex items-center gap-3">
          {/* Dígitos das horas */}
          <div className="flex gap-2">
            <div className="flex h-24 w-24 items-center justify-center bg-black/80 text-6xl font-coldvetica font-bold text-white border-2 border-white/30">
              {hoursDigits[0]}
            </div>
            <div className="flex h-24 w-24 items-center justify-center bg-black/80 text-6xl font-coldvetica font-bold text-white border-2 border-white/30">
              {hoursDigits[1]}
            </div>
          </div>
          {/* Label HOURS */}
          <div className="flex h-24 w-28 items-center justify-center bg-black/80 border-2 border-white/30">
            <span className="text-4xl font-coldvetica font-bold text-white">hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}