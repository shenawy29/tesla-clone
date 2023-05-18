import Image from "next/image";

export default function TeslaHeader({src,alt,children,}: {src: string;alt: string;children?: React.ReactNode;}) {
  return (
    <section className="relative h-screen w-full snap-center snap-always">
      <Image
        className="object-cover w-screen h-screen"
        priority
        src={src}
        fill
        alt={alt}
        quality={100}
      />
      {children}
    </section>
  );
}
