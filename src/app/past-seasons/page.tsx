import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NorCal VGC USPL - Past Seasons",
  description: "Historical team information from past USPL seasons for the NorCal VGC team",
};

export default function PastSeasonsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <section className="w-full mb-12">
          <h2 className="text-3xl font-bold text-center bg-gray-900 text-white py-3 rounded-t-lg">NorCal USPL (Season 3)</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-6 bg-blue-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-800">Final Standing</h3>
                <div className="grid gap-2">
                  <p>Regular Season: 4-3-0</p>
                  <p>Playoffs: Top 16</p>
                </div>
              </div>
              <Image src="/norcal-old.png" alt="NorCal VGC Old Logo" width={100} height={100} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Managers</h3>
              <div className="grid gap-4">
                <p>Professor Ragna</p>
                <p>ZardiChar</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Players</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li>Bobjoecarl</li>
                <li>foiledfeline</li>
                <li>Frog</li>
                <li>jiho</li>
                <li>lichess</li>
                <li>Nyle</li>
                <li>Rocket Grunt</li>
                <li>senyo</li>
                <li>sglez124</li>
                <li>sheik</li>
                <li>ToastNoButter</li>
                <li>turboisonline</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full mb-12">
          <h2 className="text-3xl font-bold text-center bg-gray-900 text-white py-3 rounded-t-lg">NorCal USPL (Season 2)</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-6 bg-blue-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-800">Final Standing</h3>
                <div className="grid gap-2">
                  <p>Regular Season: 5-2</p>
                  <p>Playoffs: Top 4</p>
                </div>
              </div>
              <Image src="/norcal-old.png" alt="NorCal VGC Old Logo" width={100} height={100} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Managers</h3>
              <div className="grid gap-4">
                <p>Professor Ragna</p>
                <p>ZardiChar</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Players</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li>Alex123</li>
                <li>BlubVGC</li>
                <li>Bobjoecarl</li>
                <li>dtgale</li>
                <li>GunnZalez</li>
                <li>IronManVGC</li>
                <li>Nyle</li>
                <li>Relinnquish</li>
                <li>sheik</li>
                <li>StellarKitty</li>
                <li>ToastNoButter</li>
                <li>zephyr</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full mb-12">
          <h2 className="text-3xl font-bold text-center bg-gray-900 text-white py-3 rounded-t-lg">NorCal USPL (Season 1)</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-6 bg-blue-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-800">Final Standing</h3>
                <div className="grid gap-2">
                  <p>Regular Season: 5-1</p>
                  <p>Playoffs: Top 8</p>
                </div>
              </div>
              <Image src="/norcal-old.png" alt="NorCal VGC Old Logo" width={100} height={100} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Managers</h3>
              <div className="grid grid-cols-2 gap-4">
                <p>Professor Ragna</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Players</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li>Alex123</li>
                <li>Bobjoecarl</li>
                <li>dtgale</li>
                <li>dtsmid</li>
                <li>GunnZalez</li>
                <li>jonas</li>
                <li>KantoClark</li>
                <li>Liminator</li>
                <li>Neil_VGC</li>
                <li>ZardiChar</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* <h1 className="text-3xl font-bold text-center bg-gray-900 text-white py-3 rounded-t-lg w-full max-w-4xl">Past Seasons</h1>
      <div className="w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-b-lg p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Season 3</h2>
            <div className="pl-4 text-gray-600">
              Season 3 information will be displayed here
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Season 2</h2>
            <div className="pl-4 text-gray-600">
              Season 2 information will be displayed here
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Season 1</h2>
            <div className="pl-4 text-gray-600">
              Season 1 information will be displayed here
            </div>
          </section>
        </div>
      </div> */}
    </main>
  );
} 