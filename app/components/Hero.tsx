import Image from "next/image";
import React from "react";
import HeroInput from "./HeroInput";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative h-[800px] w-full">
      <Image
        fill
        src="/hero.png"
        alt="Hero"
        className="object-cover"
        unoptimized
      />
      <div className="w-full h-full absolute bg-black/60 z-20" />
      <div className="relative z-50 flex flex-col  w-full h-full">
        <Header />
        
        <div className="mt-40 px-24">
          <h1 className="text-white text-6xl animate-pulse">
            <p className="font-semibold">Explore Igbo Heritage</p>
          </h1>
          <p className="max-w-[800px] mt-3">
            The perfect place to explore the beautiful Igbo Heritage with an
            amazing collection of vast archeological materials. We help you
            experience the movement and illumination of our history.
          </p>
        </div>
        <HeroInput />
      </div>
    </div>
  );
};

export default Hero;
