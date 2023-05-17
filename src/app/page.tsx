"use client";
import HeaderOverlay from "@/components/HeaderOverlay";
import NavBar from "@/components/NavBar";
import TeslaHeader from "@/components/TeslaHeader";
import Video from "@/components/Video";
import { useRef, useState } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLInputElement>(null);
  const [variable, setVariable] = useState(0);


  return (
    <>
      <main
        className="h-[100%] overflow-y-scroll snap-y snap-mandatory"
        onScroll={() => {
          setVariable(
            -scrollRef?.current?.getBoundingClientRect().y! / window.innerHeight
          );
        }}
      >
        <NavBar scrollVariable={variable} />
        <HeaderOverlay scrollVariable={variable} />
        <Video ref={scrollRef} />
        <TeslaHeader src="/Tesla-Model-3.avif" alt="Tesla Model 3" />
        <TeslaHeader src="/Tesla-Model-Y.avif" alt="Tesla Model Y" />
        <TeslaHeader src="/Tesla-Model-S.avif" alt="Tesla Model S" />
        <TeslaHeader src="/Tesla-Model-X.avif" alt="Tesla Model X" />
        <TeslaHeader src="/Tesla-SolarPanels.avif" alt="Tesla Solar Panels" />
        <TeslaHeader src="/Tesla-Solar-Roof.avif" alt="Tesla Solar Roof" />
        <TeslaHeader src="/Tesla-Accessories.avif" alt="Tesla Accessories" />
      </main>
    </>
  );
}