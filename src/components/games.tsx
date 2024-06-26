interface Video {
  id: number;
  title: string;
  url: string;
  platform: string;
  available: boolean;
  links: { id: number; url: string }[];
  playableOnPhone: boolean;
}

export const games = [
  {
    id: 0,
    title: "Stan Skate",
    url: "https://www.youtube.com/embed/aLmmE8ihKdI",
    links: [
      {
        id: 0,
        url: "https://www.play-games.com/embed/31573.html",
      },
    ],
    image: "https://i.ytimg.com/vi/xrfx8tab5aQ/maxresdefault.jpg",
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 1,
    title: "Bubble Trouble",
    url: "https://www.youtube.com/embed/BGpij9BGSYo",
    links: [
      {
        id: 0,
        url: "https://www.play-games.com/embed/8043.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 2,
    title: "Crypt Raider",
    url: "https://www.youtube.com/embed/U3SA9DAAvaE",
    links: [
      {
        id: 0,
        url: "https://www.play-games.com/iframe/20369.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 3,
    title: "Bush Shootout",
    url: "https://www.youtube.com/embed/5gpZdxTP_aU",
    links: [
      {
        id: 0,
        url: "https://games.crazygames.com/en_US/bush-shootout/index.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: true,
    platform: "Flash Game",
  },
  {
    id: 4,
    title: "Spiderman 2000",
    url: "https://www.youtube.com/embed/ClghQ1KevD4",
    links: [
      {
        id: 0,
        url: "https://www.play-games.com/game/30768/spider-man-2000.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: false,
    platform: "PS1",
  },
  {
    id: 5,
    title: "Pepsiman",
    url: "https://www.youtube.com/embed/iy2OYaS2eyM",
    links: [
      {
        id: 0,
        url: "https://www.retrogames.cc/embed/42754-pepsiman-japan.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: true,
    platform: "PS1",
  },
  {
    id: 6,
    title: "Tom And Jerry: Fists Of Fury",
    url: "https://www.youtube.com/embed/KOUGAFdVmo8",
    links: [
      {
        id: 0,
        url: "https://www.retrogames.cc/embed/32832-tom-and-jerry-in-fists-of-furry-usa.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: true,
    platform: "PS1",
  },
  {
    id: 7,
    title: "25 To Life",
    url: "https://www.youtube.com/embed/dViUzEcTOyA",
    links: [
      {
        id: 0,
        url: "https://placeholder-link.com",
      },
    ],
    image: "",
    available: false,
    playableOnPhone: false,
    platform: "PS2",
  },
  {
    id: 8,
    title: "Circus Charlie",
    url: "https://www.youtube.com/embed/_JysmzZG_qQ",
    links: [
      {
        id: 0,
        url: "https://www.retrogames.cc/embed/21342-circus-charlie-japan.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: true,
    platform: "Flash Game",
  },
  {
    id: 9,
    title: "The Incredibles: Rise of the Underminer",
    url: "https://www.youtube.com/embed/D0UvfNQZDKQ",
    links: [
      {
        id: 0,
        url: "https://placeholder-link.com",
      },
    ],
    image: "",
    available: false,
    playableOnPhone: false,
    platform: "PS2",
  },
  {
    id: 10,
    title: "Pink Panther",
    url: "https://www.youtube.com/embed/OdMGHjIrOB8",
    links: [
      {
        id: 0,
        url: "https://www.retrogames.cc/embed/42265-pink-panther-pinkadelic-pursuit.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: true,
    platform: "PS1",
  },
  {
    id: 11,
    title: "Heli Attack 3",
    url: "https://www.youtube.com/embed/ZVTTS4t8vsQ",
    links: [
      {
        id: 0,
        url: "https://www.miniplay.com/embed/heli-attack-3",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 12,
    title: "Royal Rampage",
    url: "https://www.youtube.com/embed/V4nn6gsIsqs",
    links: [
      {
        id: 0,
        url: "https://f.kbhgames.com/RS/game.php?r=//f.kbhgames.com/2018/swf/bushroyalrampage.swf&w=550&h=445&warnsupport=true",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 13,
    title: "Obama Alien Defense",
    url: "https://www.youtube.com/embed/slsaUl9g4JY",
    links: [
      {
        id: 0,
        url: "https://placeholder-link.com",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 14,
    title: "Hotdog Bush",
    url: "https://www.youtube.com/embed/5C1P45gn6-g",
    links: [
      {
        id: 0,
        url: "https://www.play-games.com/iframe/4272.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: true,
    platform: "Flash Game",
  },
  {
    id: 15,
    title: "Hobo Prison Brawl",
    url: "https://www.youtube.com/embed/qzmg3X4ux5A",
    links: [
      {
        id: 0,
        url: "https://www.play-games.com/embed/19584.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 16,
    title: "Samurai Jack: Code of the Samurai",
    url: "https://www.youtube.com/embed/6U2qouei2I0",
    links: [
      {
        id: 0,
        url: "https://www.play-games.com/embed/33552.html",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 17,
    title: "Stan James: Freekick Challenge",
    url: "https://www.youtube.com/embed/9B-H2ELbyi4",
    links: [
      {
        id: 0,
        url: "https://games.kidzsearch.com/computer/flashgame_data/ruffleplayer.html?game=stan-james-original-free-kick-challenge-13090",
      },
    ],
    image: "",
    available: true,
    playableOnPhone: true,
    platform: "Flash Game",
  },
  {
    id: 18,
    title: "Hide The Fart",
    url: "https://www.youtube.com/embed/M2zM8GbDu3k",
    links: [
      {
        id: 0,
        url: "https://games.crazygames.com/en_US/hide-the-fart/index.html",
      },
    ],
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 19,
    title: "Cat VS Dog",
    url: "https://www.youtube.com/embed/stsbVLIaBrs",
    links: [
      {
        id: 0,
        url: "https://www.gamenora.com/game/fleabag-vs-mutt/",
      },
    ],
    available: true,
    playableOnPhone: true,
    platform: "Flash Game",
  },
  {
    id: 20,
    title: "Drunk Man Run",
    url: "https://www.youtube.com/embed/gUkjz7Nz_qA",
    links: [
      {
        id: 0,
        url: "https://www.gameflare.com/embed/walk-home-drunk/",
      },
    ],
    available: true,
    playableOnPhone: true,
    platform: "Flash Game",
  },
  {
    id: 21,
    title: "3 Foot Ninja",
    url: "https://www.youtube.com/embed/Go5sKpm9aJE",
    links: [
      {
        id: 0,
        url: "https://games.crazygames.com/en_US/3-foot-ninja/index.html",
      },
    ],
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 22,
    title: "Fireboy And Watergirl",
    url: "https://www.youtube.com/embed/omv4-cX6DtU",
    links: [
      {
        id: 0,
        url: "https://games.crazygames.com/en_US/fireboy-and-watergirl-the-forest-temple/index.html",
      },
    ],
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 23,
    title: "Fancy Pants Adventure World",
    url: "https://www.youtube.com/embed/l_vll3EglxA",
    links: [
      {
        id: 0,
        url: "https://games.crazygames.com/en_US/fancy-pants-adventure-world/index.html",
      },
    ],
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 24,
    title: "Reel Gold",
    url: "https://www.youtube.com/embed/bO8sCl0oWMc",
    links: [
      {
        id: 0,
        url: "https://fs-player.com/player2.php?url=https://cache.armorgames.com/files/games/reel-gold-403.swf?v=1373587520",
      },
    ],
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
  {
    id: 25,
    title: "Panik In Chocoland",
    url: "https://www.youtube.com/embed/zQNg3aDnKKM",
    links: [
      {
        id: 0,
        url: "https://fs-player.com/player2.php?url=https://cache.armorgames.com/files/games/panik-in-chocoland-369.swf?v=1373587520",
      },
    ],
    available: true,
    playableOnPhone: false,
    platform: "Flash Game",
  },
];
