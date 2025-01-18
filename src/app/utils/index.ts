import { players } from "@/app/data/players";

export const getSeasonPlayers = (seasonName: string) => {
  return players.filter(player => 
    player.seasons.some(season => 
      season.name === seasonName && (!('isManager' in season) || !season.isManager)
    )
  );
};

export const getSeasonManagers = (seasonName: string) => {
  return players.filter(player =>
    player.seasons.some(season => 
      season.name === seasonName && 'isManager' in season && season.isManager
    )
  );
}; 