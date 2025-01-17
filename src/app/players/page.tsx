interface Player {
  name: string;
  matchRecord: string;
  battleRecord: string;
}

const players: Player[] = [
  { name: "Bobjoecarl", matchRecord: "0-0", battleRecord: "0-0" },
  { name: "eragon11145", matchRecord: "1-0", battleRecord: "2-0" },
  { name: "gp2332", matchRecord: "0-0", battleRecord: "0-0" },
  { name: "jchem", matchRecord: "1-0", battleRecord: "2-1" },
  { name: "kotoripoke", matchRecord: "0-0", battleRecord: "0-0" },
  { name: "lichess", matchRecord: "0-0", battleRecord: "0-0" },
  { name: "max1960", matchRecord: "1-0", battleRecord: "2-1" },
  { name: "MissingNoL", matchRecord: "0-1", battleRecord: "1-2" },
  { name: "refyrn", matchRecord: "0-0", battleRecord: "0-0" },
  { name: "soduh", matchRecord: "0-1", battleRecord: "0-2" },
  { name: "THATSAplusONE", matchRecord: "0-0", battleRecord: "0-0" },
  { name: "VivixVGC", matchRecord: "0-1", battleRecord: "1-2" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function PlayersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-center bg-gray-900 text-white py-3 rounded-t-lg w-full max-w-4xl">Players</h1>
      <div className="w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-b-lg p-6">
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-sm font-semibold text-gray-600 uppercase">Player Name</div>
            <div className="text-sm font-semibold text-gray-600 uppercase text-center">Match Record</div>
            <div className="text-sm font-semibold text-gray-600 uppercase text-center">Battle Record</div>
          </div>
          <div className="space-y-2">
            {players.map((player) => (
              <div 
                key={player.name}
                className="grid grid-cols-3 gap-4 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-150"
              >
                <div className="text-gray-900 font-medium">{player.name}</div>
                <div className="text-gray-600 text-center">{player.matchRecord}</div>
                <div className="text-gray-600 text-center">{player.battleRecord}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 