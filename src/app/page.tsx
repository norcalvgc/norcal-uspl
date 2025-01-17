import Image from "next/image";

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
          <h2 className="text-3xl font-bold mb-6 text-center">NorCal USPL Team Roster (Season 4)</h2>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Manager</h3>
              <p className="text-lg pl-4">simonxl</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Players</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Using consistent styling for all player names */}
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">Bobjoecarl</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">eragon11145</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">gp2332</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">jchem</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">kotoripoke</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">lichess</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">max1960</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">MissingNoL</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">refyrn</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">soduh</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">THATSAplusONE</li>
                <li className="p-2 hover:bg-blue-50 rounded transition-colors text-lg">VivixVGC</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Week 2 vs. Indiana</h2>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <ul className="space-y-4">
              <li className="grid grid-cols-3 items-center hover:bg-blue-50 rounded p-2 transition-colors">
                <span className="text-lg">gp2332</span>
                <span className="text-center font-medium text-blue-800">vs.</span>
                <span className="text-lg text-right">45mice</span>
              </li>
              <li className="grid grid-cols-3 items-center hover:bg-blue-50 rounded p-2 transition-colors">
                <span className="text-lg">THATSAplusONE</span>
                <span className="text-center font-medium text-blue-800">vs.</span>
                <span className="text-lg text-right">Kojay</span>
              </li>
              <li className="grid grid-cols-3 items-center hover:bg-blue-50 rounded p-2 transition-colors">
                <span className="text-lg">VivixVGC</span>
                <span className="text-center font-medium text-blue-800">vs.</span>
                <span className="text-lg text-right">DracoJack</span>
              </li>
              <li className="grid grid-cols-3 items-center hover:bg-blue-50 rounded p-2 transition-colors">
                <span className="text-lg">kotoripoke</span>
                <span className="text-center font-medium text-blue-800">vs.</span>
                <span className="text-lg text-right">Badassfrosslass</span>
              </li>
              <li className="grid grid-cols-3 items-center hover:bg-blue-50 rounded p-2 transition-colors">
                <span className="text-lg">MissingNoL</span>
                <span className="text-center font-medium text-blue-800">vs.</span>
                <span className="text-lg text-right">Roundybout</span>
              </li>
              <li className="grid grid-cols-3 items-center hover:bg-blue-50 rounded p-2 transition-colors">
                <span className="text-lg">max1960</span>
                <span className="text-center font-medium text-blue-800">vs.</span>
                <span className="text-lg text-right">Theyummybagel</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
