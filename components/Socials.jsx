import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Behance",
    link: "https://behance.net/ramyukesh",
    Icon: RiDribbbleLine, // Using Dribbble icon for Behance as placeholder if RiBehance not available
  },
  {
    name: "Instagram",
    link: "https://instagram.com/ramyukesh",
    Icon: RiInstagramLine,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/ramyukesh",
    Icon: RiYoutubeLine, // Using Youtube icons placeholders for LinkedIn if needed
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/ramyukesh",
    Icon: RiDribbbleLine,
  },
  {
    name: "Pinterest",
    link: "https://pinterest.com/ramyukesh",
    Icon: RiPinterestLine,
  },
  {
    name: "Github",
    link: "https://github.com/ramyukesh",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
