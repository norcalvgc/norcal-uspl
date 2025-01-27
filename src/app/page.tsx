import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getSeasonPlayers, getSeasonManagers } from "@/app/utils";

type MatchRowProps = {
  norcalPlayer: string;
  norcalScore: number;
  opponentPlayer: string;
  opponentScore: number;
  isWin?: boolean;
  isLoss?: boolean;
};

const MatchRow = ({ norcalPlayer, norcalScore, opponentPlayer, opponentScore, isWin, isLoss }: MatchRowProps) => {
  const bgColor = isWin ? 'bg-green-50' : isLoss ? 'bg-red-50' : '';
  const playerNameColor = isWin ? 'text-green-800' : '';

  return (
    <div className={`flex flex-col md:flex-row items-center hover:bg-blue-50 p-2 transition-colors gap-2 justify-between ${bgColor}`}>
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full md:w-[45%]">
        <span className={`truncate ${isWin ? 'font-medium ' + playerNameColor : ''}`}>{norcalPlayer}</span>
        <span className="mt-1 md:mt-0 md:ml-1 inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">{norcalScore}</span>
      </div>
      <div className="flex items-center">
        <span className="text-center font-medium text-blue-800 px-2 whitespace-nowrap">vs.</span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full md:w-[45%]">
        <span className="hidden md:inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">{opponentScore}</span>
        <span className="truncate md:ml-auto">{opponentPlayer}</span>
        <span className="mt-1 md:mt-0 md:ml-1 inline-block md:hidden min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">{opponentScore}</span>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "NorCal VGC USPL - Home",
  description: "Home page for the NorCal VGC team in USPL",
};

export default function Home() {
  const season4Players = getSeasonPlayers("Season 4");
  const season4Managers = getSeasonManagers("Season 4");

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <Image
          src="/norcal.png"
          alt="NorCal VGC Logo"
          width={400}
          height={400}
          className="mb-8"
        />

        <div className="flex flex-col gap-12 w-full">
        <section className="w-full">
          <h2 className="text-xl md:text-3xl font-bold text-center bg-gray-900 text-white py-3 rounded-t-lg">NorCal USPL (Season 4)</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
          <div className="mb-6 bg-blue-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Standing</h3>
                <div className="grid gap-2">
                  <p>Regular Season: 2-0-1</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Manager</h3>
              {season4Managers.map(manager => (
                <Link 
                  key={manager.slug}
                  href={`/players/${manager.slug}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {manager.name}
                </Link>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Players</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {season4Players.map(player => (
                  <li key={player.slug}>
                    <Link 
                      href={`/players/${player.slug}`}
                      className="text-blue-600"
                    >
                      {player.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center bg-gray-900 text-white py-3 rounded-t-lg">Week 3 vs. Michigan</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
          <p className="text-gray-600 text-sm mb-4">Dates: 1/20/25 - 1/26/25</p>
            <div className="divide-y divide-gray-200">
              <MatchRow 
                norcalPlayer="MissingNoL"
                norcalScore={2}
                opponentPlayer="kamikazekidgc"
                opponentScore={0}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="Bobjoecarl"
                norcalScore={2}
                opponentPlayer="itachivgc"
                opponentScore={0}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="eragon"
                norcalScore={2}
                opponentPlayer="misspeller"
                opponentScore={1}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="turboisonline"
                norcalScore={2}
                opponentPlayer="izzywooperstan"
                opponentScore={0}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="kotoripoke"
                norcalScore={2}
                opponentPlayer="aydenbarber_"
                opponentScore={0}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="ToastNoButter"
                norcalScore={2}
                opponentPlayer="trunksshe"
                opponentScore={0}
                isWin={true}
              />
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center bg-gray-900 text-white py-3 rounded-t-lg">Week 2 vs. Indiana</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
          <p className="text-gray-600 text-sm mb-4">Dates: 1/13/25 - 1/19/25</p>
            <div className="divide-y divide-gray-200">
              <MatchRow 
                norcalPlayer="gp2332"
                norcalScore={2}
                opponentPlayer="45mice"
                opponentScore={1}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="THATSAplusONE"
                norcalScore={2}
                opponentPlayer="Kojay"
                opponentScore={0}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="VivixVGC"
                norcalScore={2}
                opponentPlayer="DracoJack"
                opponentScore={1}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="kotoripoke"
                norcalScore={2}
                opponentPlayer="Badassfrosslass"
                opponentScore={0}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="MissingNoL"
                norcalScore={1}
                opponentPlayer="Roundybout"
                opponentScore={2}
                isLoss={true}
              />
              <MatchRow 
                norcalPlayer="ToastNoButter"
                norcalScore={1}
                opponentPlayer="Theyummybagel"
                opponentScore={2}
                isLoss={true}
              />
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center bg-gray-900 text-white py-3 rounded-t-lg">Week 1 vs. Connecticut</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
            <p className="text-gray-600 text-sm mb-4">Dates: 1/6/25 - 1/12/25</p>
            <div className="divide-y divide-gray-200">
              <MatchRow 
                norcalPlayer="eragon"
                norcalScore={2}
                opponentPlayer="hush"
                opponentScore={0}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="turboisonline"
                norcalScore={2}
                opponentPlayer="zapguppy"
                opponentScore={1}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="ToastNoButter"
                norcalScore={2}
                opponentPlayer="whim3102"
                opponentScore={1}
                isWin={true}
              />
              <MatchRow 
                norcalPlayer="MissingNoL"
                norcalScore={1}
                opponentPlayer="official_amazon.com"
                opponentScore={2}
                isLoss={true}
              />
              <MatchRow 
                norcalPlayer="soduh"
                norcalScore={0}
                opponentPlayer="danielmarcelo"
                opponentScore={2}
                isLoss={true}
              />
              <MatchRow 
                norcalPlayer="VivixVGC"
                norcalScore={1}
                opponentPlayer="vcicco"
                opponentScore={2}
                isLoss={true}
              />
            </div>
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
