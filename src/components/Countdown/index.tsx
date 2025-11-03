// components/Countdown.tsx
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
      minutes: 0,
      seconds: 0,
      expired: false
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
  const minutesDigits = timeLeft.minutes.toString().padStart(2, '0').split('');
  const secondsDigits = timeLeft.seconds.toString().padStart(2, '0').split('');

  if (timeLeft.expired) {
    return (
      <div className="z-10 mt-8 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">Evento a decorrer!</span>
      </div>
    );
  }

  return (
    <div className="z-10 mt-8 flex flex-col items-center justify-center gap-6">
      {/* Timer com retângulos retos */}
      <div className="flex items-center justify-center gap-4">
        {/* Dias */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2">
            <div className="flex h-20 w-14 items-center justify-center bg-black/80 text-4xl font-bold text-white border-2 border-white/30">
              {daysDigits[0]}
            </div>
            <div className="flex h-20 w-14 items-center justify-center bg-black/80 text-4xl font-bold text-white border-2 border-white/30">
              {daysDigits[1]}
            </div>
          </div>
          <span className="text-sm font-medium text-white">DAYS</span>
        </div>

        {/* Horas */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2">
            <div className="flex h-20 w-14 items-center justify-center bg-black/80 text-4xl font-bold text-white border-2 border-white/30">
              {hoursDigits[0]}
            </div>
            <div className="flex h-20 w-14 items-center justify-center bg-black/80 text-4xl font-bold text-white border-2 border-white/30">
              {hoursDigits[1]}
            </div>
          </div>
          <span className="text-sm font-medium text-white">HOURS</span>
        </div>

        {/* Minutos */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2">
            <div className="flex h-20 w-14 items-center justify-center bg-black/80 text-4xl font-bold text-white border-2 border-white/30">
              {minutesDigits[0]}
            </div>
            <div className="flex h-20 w-14 items-center justify-center bg-black/80 text-4xl font-bold text-white border-2 border-white/30">
              {minutesDigits[1]}
            </div>
          </div>
          <span className="text-sm font-medium text-white">MINUTES</span>
        </div>

        {/* Segundos */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2">
            <div className="flex h-20 w-14 items-center justify-center bg-black/80 text-4xl font-bold text-white border-2 border-white/30">
              {secondsDigits[0]}
            </div>
            <div className="flex h-20 w-14 items-center justify-center bg-black/80 text-4xl font-bold text-white border-2 border-white/30">
              {secondsDigits[1]}
            </div>
          </div>
          <span className="text-sm font-medium text-white">SECONDS</span>
        </div>
      </div>
    </div>
  );
}