'use client';

import * as React from 'react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';

const VIDEOS = [
  {
    title: "Escena principal",
    vimeo: "https://player.vimeo.com/video/924787898?autoplay=1&muted=1",
    thumb: "placeholder.svg",
    main: true,
  },
  {
    title: "Ayuda",
    vimeo: "https://player.vimeo.com/video/918425142",
    thumb: "placeholder.svg",
    main: false,
  },
  {
    title: "Falanges",
    vimeo: "https://player.vimeo.com/video/889559950",
    thumb: "placeholder.svg",
    main: false,
  },
  {
    title: "Dimelo",
    vimeo: "https://player.vimeo.com/video/776328998",
    thumb: "placeholder.svg",
    main: false,
  },
];

export default function VideoBook() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(VIDEOS[0]);

  // El principal siempre es el primero del array, por claridad:
  const main = VIDEOS.find(v => v.main) || VIDEOS[0];
  const others = VIDEOS.filter(v => !v.main);

  return (
    <section className="flex flex-col items-center gap-4">
      {/* Video principal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow group"
            onClick={() => setSelected(main)}
          >
            <iframe
              src={main.vimeo}
              allow="autoplay; fullscreen"
              className="w-full h-full"
              title={main.title}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 bg-black">
          <iframe
            src={selected.vimeo}
            allow="autoplay; fullscreen"
            className="w-full aspect-video rounded-t"
            title={selected.title}
            autoFocus
          />
        </DialogContent>
      </Dialog>

      {/* Thumbnails inferiores */}
      <div className="flex gap-4 w-full max-w-2xl justify-center">
        {others.map((v) => (
          <Dialog key={v.vimeo} open={open && selected.vimeo === v.vimeo} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button
                className="w-36 aspect-video rounded shadow overflow-hidden group relative"
                onClick={() => setSelected(v)}
              >
                {/*<Image src={v.thumb} alt={v.title} className="object-cover w-full h-full" />*/}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl p-0 bg-black">
              <iframe
                src={v.vimeo}
                allow="autoplay; fullscreen"
                className="w-full aspect-video rounded-t"
                title={v.title}
                autoFocus
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}