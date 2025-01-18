import { players } from "@/app/data/players";

interface Season {
  id: number;
  name: string;
  year: number;
  matchRecord: string;
  battleRecord: string;
}

export default function PlayerProfile({ params }: { params: { slug: string } }) {
  const player = players.find(p => p.slug === params.slug);

  if (!player) {
    return (
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="w-full max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800">Player not found</h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Profile Picture */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-4 border-white">
                {player.avatarUrl ? (
                  <img 
                    src={player.avatarUrl} 
                    alt={`${player.name}'s avatar`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                )}
              </div>

              {/* Player Name */}
              <div className="text-center md:text-left">
                {/* <h1 className="text-2xl md:text-4xl font-bold text-white mb-2"> */}
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                  {player.name}
                </h1>
                {/* <p className="text-blue-100">NorCal VGC Player</p> */}
              </div>
            </div>
          </div>

          {/* Season Ribbons */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Season History</h2>
            <div className="flex flex-wrap gap-3">
              {player.seasons.map((season, index) => {
                const colors = [
                  'bg-purple-100 text-purple-800 hover:bg-purple-200',
                  'bg-emerald-100 text-emerald-800 hover:bg-emerald-200',
                  'bg-rose-100 text-rose-800 hover:bg-rose-200',
                  'bg-blue-100 text-blue-800 hover:bg-blue-200'
                ];
                const yearColors = [
                  'text-purple-600',
                  'text-emerald-600', 
                  'text-rose-600',
                  'text-blue-600'
                ];
                return (
                  <div
                    key={season.name}
                    className={`relative inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors ${colors[index % colors.length]}`}
                  >
                    <span className="relative z-10">{season.name}</span>
                    <span className={`ml-2 ${yearColors[index % yearColors.length]}`}>({season.year})</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Season Stats */}
          {player.seasons.map((season) => (
            <div key={season.name} className="p-6 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{season.name} Stats</h2>
                {'isManager' in season && season.isManager ? (
                  <span className="px-2 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded">Manager</span>
                ) : (
                  <span className="px-2 py-1 text-sm font-medium bg-green-100 text-green-800 rounded">Player</span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Match Record</p>
                  <p className="text-xl font-semibold">{season.matchRecord}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Battle Record</p>
                  <p className="text-xl font-semibold">{season.battleRecord}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
