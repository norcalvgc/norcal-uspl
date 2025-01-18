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
            <div className="flex flex-col md:flex-row items-center hover:bg-blue-50 p-2 transition-colors gap-2 justify-between">
                <div className="flex justify-between items-center w-full">
                  <span className="truncate">gp2332</span>
                  <span className="ml-1 inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">0</span>
                </div>
                <span className="text-center font-medium text-blue-800 px-2 whitespace-nowrap">vs.</span>
                <div className="flex justify-between items-center w-full">
                  <span className="inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">0</span>
                  <span className="truncate">45mice</span>
                </div>
              </div>
              {/* <div className="flex flex-col md:flex-row items-center hover:bg-blue-50 p-2 transition-colors gap-2 justify-between">
                <div className="flex justify-between items-center w-full md:w-[40%] md:justify-end">
                  <span className="truncate">gp2332</span>
                  <span className="ml-1 inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">0</span>
                </div>
                <span className="text-center font-medium text-blue-800 px-2 whitespace-nowrap">vs.</span>
                <div className="flex justify-between items-center w-full md:w-[40%] md:justify-end">
                  <span className="inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">0</span>
                  <span className="truncate">45mice</span>
                </div>
              </div> */}
              <div className="flex flex-col md:flex-row items-center hover:bg-blue-50 p-2 transition-colors gap-2 justify-between">
                <div className="flex justify-between items-center w-full">
                  <span className="truncate">THATSAplusONE</span>
                  <span className="ml-1 inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">0</span>
                </div>
                <span className="text-center font-medium text-blue-800 px-2 whitespace-nowrap">vs.</span>
                <div className="flex justify-between items-center w-full">
                  <span className="inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">0</span>
                  <span className="truncate">Kojay</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center hover:bg-blue-50 p-2 transition-colors gap-2 justify-between bg-green-50">
                <div className="flex justify-between items-center w-full">
                  <span className="truncate font-medium text-green-800">VivixVGC</span>
                  <span className="ml-1 inline-block min-w-[20px] text-center font-bold bg-green-200 rounded px-1.5">2</span>
                </div>
                <span className="text-center font-medium text-blue-800 px-2 whitespace-nowrap">vs.</span>
                <div className="flex justify-between items-center w-full">
                  <span className="inline-block min-w-[20px] text-center font-bold bg-green-200 rounded px-1.5">1</span>
                  <span className="truncate">DracoJack</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center hover:bg-blue-50 p-2 transition-colors gap-2 justify-between">
                <div className="flex justify-between items-center w-full">
                  <span className="truncate">kotoripoke</span>
                  <span className="ml-1 inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">0</span>
                </div>
                <span className="text-center font-medium text-blue-800 px-2 whitespace-nowrap">vs.</span>
                <div className="flex justify-between items-center w-full">
                  <span className="inline-block min-w-[20px] text-center font-medium bg-gray-100 rounded px-1.5">0</span>
                  <span className="truncate">Badassfrosslass</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center hover:bg-blue-50 p-2 transition-colors gap-2 justify-between bg-red-50">
                <div className="flex justify-between items-center w-full">
                  <span className="truncate">MissingNoL</span>
                  <span className="ml-1 inline-block min-w-[20px] text-center font-bold bg-red-200 rounded px-1.5">1</span>
                </div>
                <span className="text-center font-medium text-blue-800 px-2 whitespace-nowrap">vs.</span>
                <div className="flex justify-between items-center w-full">
                  <span className="inline-block min-w-[20px] text-center font-bold bg-red-200 rounded px-1.5">2</span>
                  <span className="truncate">Roundybout</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center hover:bg-blue-50 p-2 transition-colors gap-2 justify-between bg-red-50">
                <div className="flex justify-between items-center w-full">
                  <span className="truncate">ToastNoButter</span>
                  <span className="ml-1 inline-block min-w-[20px] text-center font-bold bg-red-200 rounded px-1.5">1</span>
                </div>
                <span className="text-center font-medium text-blue-800 px-2 whitespace-nowrap">vs.</span>
                <div className="flex justify-between items-center w-full">
                  <span className="inline-block min-w-[20px] text-center font-bold bg-red-200 rounded px-1.5">2</span>
                  <span className="truncate">Theyummybagel</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
