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
      <h1 className="text-4xl font-bold mb-8">Players</h1>
      <div className="w-full max-w-4xl">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Match Record
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Battle Record
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {players.map((player) => (
                <tr key={player.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {player.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {player.matchRecord}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {player.battleRecord}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
} 