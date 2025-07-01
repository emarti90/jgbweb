"use client";

type Reel = {
  videoUrl: string; 
  poster?: string;  
};

export default function Reel({ videoUrl, poster }: Reel) {
  return (
    <section className={"w-full flex justify-center items-center bg-black"}>
      <video
        src={videoUrl}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto max-h-[60vh] object-cover shadow"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noremoteplayback nofullscreen"
      />
    </section>
  );
}
