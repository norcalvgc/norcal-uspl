import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NorCal VGC USPL - Home",
  description: "Home page for the NorCal VGC team in USPL",
};

export default function Home() {
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

        <section className="w-full mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-center bg-gray-900 text-white py-3 rounded-t-lg">NorCal USPL (Season 4)</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
          <div className="mb-6 bg-blue-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-800">Standing</h3>
                <div className="grid gap-2">
                  <p>Regular Season: 0-0-1</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Manager</h3>
              <p>simonxl</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Players</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li>Bobjoecarl</li>
                <li>eragon</li>
                <li>gp2332</li>
                <li>turboisonline</li>
                <li>kotoripoke</li>
                <li>lichess</li>
                <li>ToastNoButter</li>
                <li>MissingNoL</li>
                <li>refyrn</li>
                <li>soduh</li>
                <li>THATSAplusONE</li>
                <li>VivixVGC</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center bg-gray-900 text-white py-3 rounded-t-lg">Week 2 vs. Indiana</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-[1fr,auto,1fr] md:grid-cols-3 items-center hover:bg-blue-50 p-2 transition-colors gap-2">
                <span className="truncate">gp2332</span>
                <span className="text-center font-medium text-blue-800 px-2">vs.</span>
                <span className="truncate text-left md:text-right">45mice</span>
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] md:grid-cols-3 items-center hover:bg-blue-50 p-2 transition-colors gap-2">
                <span className="truncate">THATSAplusONE</span>
                <span className="text-center font-medium text-blue-800 px-2">vs.</span>
                <span className="truncate text-left md:text-right">Kojay</span>
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] md:grid-cols-3 items-center hover:bg-blue-50 p-2 transition-colors gap-2">
                <span className="truncate">VivixVGC</span>
                <span className="text-center font-medium text-blue-800 px-2">vs.</span>
                <span className="truncate text-left md:text-right">DracoJack</span>
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] md:grid-cols-3 items-center hover:bg-blue-50 p-2 transition-colors gap-2">
                <span className="truncate">kotoripoke</span>
                <span className="text-center font-medium text-blue-800 px-2">vs.</span>
                <span className="truncate text-left md:text-right">Badassfrosslass</span>
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] md:grid-cols-3 items-center hover:bg-blue-50 p-2 transition-colors gap-2">
                <span className="truncate">MissingNoL</span>
                <span className="text-center font-medium text-blue-800 px-2">vs.</span>
                <span className="truncate text-left md:text-right">Roundybout</span>
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] md:grid-cols-3 items-center hover:bg-blue-50 p-2 transition-colors gap-2">
                <span className="truncate">ToastNoButter</span>
                <span className="text-center font-medium text-blue-800 px-2">vs.</span>
                <span className="truncate text-left md:text-right">Theyummybagel</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
