'use client';

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const VIDEOS = [
  {
    title: "Escena dramática",
    image: "/videobook/1.jpg",
    vimeo: "https://vimeo.com/123456",
  },
  // ...más vídeos
];

export default function VideoCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  // Autoplay manual usando la instancia de keen-slider
  React.useEffect(() => {
    if (!instanceRef.current) return;
    const slider = instanceRef.current;
    let timeout: NodeJS.Timeout;

    const next = () => {
      slider.next();
      timeout = setTimeout(next, 3500);
    };

    timeout = setTimeout(next, 3500);

    return () => clearTimeout(timeout);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow bg-black">
      {VIDEOS.map((video) => (
        <a
          key={video.vimeo}
          href={video.vimeo}
          target="_blank"
          rel="noopener noreferrer"
          className="keen-slider__slide flex flex-col items-center justify-center cursor-pointer group"
        >
          <Image
            src={video.image}
            alt={video.title}
            width={460}
            height={460}
            className="object-cover w-full aspect-video transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-cream font-playfair text-lg p-2 bg-black/60 w-full text-center">
            {video.title}
          </span>
        </a>
      ))}
    </div>
  );
}
