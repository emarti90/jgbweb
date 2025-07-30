import { FaInstagram, FaVimeoV, FaXTwitter, FaImdb } from "react-icons/fa6";

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/javat.gb/" },
  { icon: FaImdb, label: "IMDB", url: "https://pro.imdb.com/name/nm14862880" },
  { icon: FaXTwitter, label: "X (Twitter)", url: "https://x.com/Javatgb" },
  { icon: FaVimeoV, label: "Vimeo", url: "https://vimeo.com/javiguerrero" },
];

export default function SocialLinks() {
  return (
    <section id="socials" className="w-full flex flex-col items-center mt-14 mb-6">
      <div className="flex gap-6">
        {SOCIALS.map(({ icon: Icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="rounded-xl bg-navy p-3 hover:scale-110 transition-colors duration-200 shadow text-white"
          >
            <Icon size={28} className="text-inherit" />
          </a>
        ))}
      </div>
    </section>
  );
}
