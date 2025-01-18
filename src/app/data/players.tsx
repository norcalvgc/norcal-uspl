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
  }
]