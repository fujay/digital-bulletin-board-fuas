"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const ContextObj = {
    duration: 10000,
  };

  const [remainingTime, setRemainingTime] = useState(ContextObj.duration);

  useEffect(() => {
    let timer = setInterval(function () {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return prevTime;
        }
        return prevTime - 50;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <progress
      className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-fuas-secondary [&::-webkit-progress-value]:bg-fuas-primary [&::-moz-progress-bar]:bg-fuas-primary "
      max={ContextObj.duration}
      value={remainingTime}
    />
  );
}
