import Image from "next/image";
import developpeurAnimation from '../../assets/animations/developpeur.gif';

export default function BioAnimation() {
  return (
    <div className="relative w-full md:w-5/12 h-64 md:h-auto min-h-[400px]">
      <Image
        src={developpeurAnimation} // ou .png/.webp
        alt="Avatar animé"
        fill
        sizes="(min-width: 512px) 40vw, 100vw"
        className="object-contain"
        priority
        unoptimized
      />
    </div>
  );
}
