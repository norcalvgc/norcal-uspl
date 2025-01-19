interface BaseSeason {
  name: string;
  year: number;
  matchRecord: string;
  battleRecord: string;
}

interface ManagerSeason extends BaseSeason {
  isManager: boolean;
}

export interface Player {
  name: string;
  slug: string;
  avatarUrl?: string;
  seasons: (BaseSeason | ManagerSeason)[];
}

export const players: Player[] = [
  {
    name: "Alex123",
    slug: "alex123",
    // avatarUrl: "/players/alex123.png",
    seasons: [
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "2-1",
        battleRecord: "5-2",
      },
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "1-2",
        battleRecord: "4-4",
      },
    ]
  },
  {
    name: "BlubVGC",
    slug: "blubvgc",
    // avatarUrl: "/players/blubvgc.png",
    seasons: [
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "2-1",
        battleRecord: "5-2",
      },
    ]
  },
  {
    name: "Bobjoecarl",
    slug: "bobjoecarl",
    // avatarUrl: "/players/bobjoecarl.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "0-0",
        battleRecord: "0-0",
      },
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "3-1",
        battleRecord: "7-5",
      },
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "1-0",
        battleRecord: "2-1",
      },
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "1-1",
        battleRecord: "2-3",
      },
    ]
  },
  {
    name: "dtgale",
    slug: "dtgale",
    // avatarUrl: "/players/dtgale.png",
    seasons: [
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "2-1",
        battleRecord: "4-3",
      },
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "3-0",
        battleRecord: "6-1",
      },
    ]
  },
  {
    name: "dtsmid",
    slug: "dtsmid",
    // avatarUrl: "/players/dtsmid.png",
    seasons: [
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "2-1",
        battleRecord: "4-3",
      },
    ]
  },
  {
    name: "eragon",
    slug: "eragon",
    // avatarUrl: "/players/eragon.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "1-0",
        battleRecord: "2-0",
      },
    ]
  },
  {
    name: "foiledfeline",
    slug: "foiledfeline",
    // avatarUrl: "/players/foiledfeline.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "2-1",
        battleRecord: "4-2",
      },
    ]
  },
  {
    name: "Frog",
    slug: "frog",
    // avatarUrl: "/players/frog.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "1-1",
        battleRecord: "2-3",
      },
    ]
  },
  {
    name: "gp2332",
    slug: "gp2332",
    // avatarUrl: "/players/gp2332.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "0-0",
        battleRecord: "0-0",
      },
    ]
  },
  {
    name: "GunnZalez",
    slug: "gunnzalez",
    // avatarUrl: "/players/gunnzalez.png",
    seasons: [
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "0-2",
        battleRecord: "2-4",
      },
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "2-0",
        battleRecord: "4-1",
      },
    ]
  },
  {
    name: "IronManVGC",
    slug: "ironmanvgc",
    // avatarUrl: "/players/ironmanvgc.png",
    seasons: [
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "0-2",
        battleRecord: "0-1",
      },
    ]
  },
  {
    name: "jiho",
    slug: "jiho",
    // avatarUrl: "/players/jiho.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "4-1",
        battleRecord: "8-4",
      },
    ]
  },
  {
    name: "KantoClark",
    slug: "kantoclark",
    // avatarUrl: "/players/kantoclark.png",
    seasons: [
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "1-1",
        battleRecord: "3-3",
      },
    ]
  },
  {
    name: "kotoripoke",
    slug: "kotoripoke",
    // avatarUrl: "/players/kotoripoke.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "1-0",
        battleRecord: "2-0",
      },
    ]
  },
  {
    name: "lichess",
    slug: "lichess",
    // avatarUrl: "/players/lichess.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "0-0",
        battleRecord: "0-0",
      },
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "1-1",
        battleRecord: "3-3",
      },
    ]
  },
  {
    name: "Liminator",
    slug: "liminator",
    // avatarUrl: "/players/liminator.png",
    seasons: [
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "1-2",
        battleRecord: "2-5",
      },
    ]
  },
  {
    name: "MissingNoL",
    slug: "missingnol",
    // avatarUrl: "/players/missingnol.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "0-2",
        battleRecord: "2-4",
      },
    ]
  },
  {
    name: "Neil_VGC",
    slug: "neilvgc",
    // avatarUrl: "/players/neilvgc.png",
    seasons: [
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "3-1",
        battleRecord: "6-3",
      },
    ]
  },
  {
    name: "Nyle",
    slug: "nyle",
    // avatarUrl: "/players/nyle.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "2-1",
        battleRecord: "4-4",
      },
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "2-1",
        battleRecord: "4-2",
      },
    ]
  },
  {
    name: "Professor Ragna",
    slug: "professorragna",
    avatarUrl: "/players/professorragna.jpg",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "0-0",
        battleRecord: "0-0",
        isManager: true,
      },
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "2-0",
        battleRecord: "4-1",
        isManager: true,
      },
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "0-0",
        battleRecord: "0-0",
        isManager: true,
      },
    ]
  },
  {
    name: "refyrn",
    slug: "refyrn",
    // avatarUrl: "/players/refyrn.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "0-0",
        battleRecord: "0-0",
      },
    ]
  },
  {
    name: "Relinnquish",
    slug: "relinnquish",
    // avatarUrl: "/players/relinnquish.png",
    seasons: [
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "2-0",
        battleRecord: "4-2",
      },
    ]
  },
  {
    name: "Rocket Grunt",
    slug: "rocketgrunt",
    // avatarUrl: "/players/rocketgrunt.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "0-2",
        battleRecord: "0-4",
      },
    ]
  },
  {
    name: "senyo",
    slug: "senyo",
    // avatarUrl: "/players/senyo.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "4-1",
        battleRecord: "9-2",
      },
    ]
  },
  {
    name: "sglez124",
    slug: "sglez124",
    // avatarUrl: "/players/sglez124.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "2-1",
        battleRecord: "4-4",
      },
    ]
  },
  {
    name: "sheik",
    slug: "sheik",
    // avatarUrl: "/players/sheik.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "5-0",
        battleRecord: "10-2",
      },
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "0-3",
        battleRecord: "1-6",
      }
    ]
  },
  {
    name: "simonxl",
    slug: "simonxl",
    // avatarUrl: "/players/simonxl.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "0-0",
        battleRecord: "0-0",
        isManager: true,
      },
    ]
  },
  {
    name: "soduh",
    slug: "soduh",
    // avatarUrl: "/players/soduh.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "0-1",
        battleRecord: "0-2",
      },
    ]
  },
  {
    name: "StellarKitty",
    slug: "stellarkitty",
    // avatarUrl: "/players/stellarkitty.png",
    seasons: [
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "3-0",
        battleRecord: "6-1",
      },
    ]
  },
  {
    name: "THATSaplusONE",
    slug: "thatsaplusone",
    // avatarUrl: "/players/thatsaplusone.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "1-0",
        battleRecord: "2-0",
      },
    ]
  },
  {
    name: "ToastNoButter",
    slug: "toastnobutter",
    // avatarUrl: "/players/toastnobutter.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "1-1",
        battleRecord: "3-3",
      },
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "2-2",
        battleRecord: "5-4",
      },     
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "4-0",
        battleRecord: "8-0",
      },
    ]
  },
  {
    name: "turboisonline",
    slug: "turboisonline",
    // avatarUrl: "/players/turboisonline.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "1-0",
        battleRecord: "2-1",
      },
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "1-3",
        battleRecord: "4-7",
      },
    ]
  },
  {
    name: "VivixVGC",
    slug: "vivixvgc",
    // avatarUrl: "/players/vivixvgc.png",
    seasons: [
      {
        name: "Season 4",
        year: 2025,
        matchRecord: "1-1",
        battleRecord: "3-3",
      },
    ]
  },
  {
    name: "ZardiChar",
    slug: "zardichar",
    // avatarUrl: "/players/zardichar.png",
    seasons: [
      {
        name: "Season 3",
        year: 2024,
        matchRecord: "0-0",
        battleRecord: "0-0",
        isManager: true,
      },
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "0-2",
        battleRecord: "2-4",
        isManager: true,
      },
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "2-2",
        battleRecord: "4-4",
      },
    ]
  },
  {
    name: "zephyr",
    slug: "zephyr",
    // avatarUrl: "/players/zephyr.png",
    seasons: [
      {
        name: "Season 2",
        year: 2023,
        matchRecord: "1-2",
        battleRecord: "3-4",
      },
      {
        name: "Season 1",
        year: 2022,
        matchRecord: "2-2",
        battleRecord: "5-5",
      },
    ]
  }
]