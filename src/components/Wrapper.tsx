import React, { useState, useRef } from "react";

export default function Wrapper({ ...props }) {
  const [variable, setVariable] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main
      className="h-[100%] overflow-y-scroll snap-y snap-mandatory"
      onScroll={() => {
        setVariable(scrollRef?.current?.scrollTop! / window.innerHeight);
        console.log(scrollRef);
      }}
    >
      {props.children}
    </main>
  );
}
