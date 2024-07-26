export interface Socials {
  id: string;
  title: string;
  icon: string;
  url: string;
}

export const socials: Socials[] = [
  {
    id: "0",
    title: "GitHub",
    icon: "<i class='nes-icon github'></i>",
    url: "https://github.com/16bits-in",
  },
  {
    id: "1",
    title: "Twitter",
    icon: "<i class='nes-icon twitter'></i>",
    url: "https://x.com/16bits_in",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "<i class='nes-icon instagram'></i>",
    url: "https://instagram.com/16bits_in",
  },
  {
    id: "3",
    title: "Facebook",
    icon: "<i class='nes-icon facebook'></i>",
    url: "https://facebook.com/16bits_in",
  },
  {
    id: "4",
    title: "Mail",
    icon: "<i class='nes-icon gmail'></i>",
    url: "mailto:contact@16bits.in",
  },
];
