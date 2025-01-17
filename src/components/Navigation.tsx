import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    // <nav className="w-full bg-[#004b84] text-white p-4">
    <nav className="w-full bg-[#2a72b8] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* <div className={`text-3xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300`}> */}
        <Link href="/" className={`text-3xl font-bold text-white hover:text-gray-200 transition-colors`}>
          NorCal VGC
        </Link>
        {/* <Link href="/" className="flex items-center">
          <Image
            src="/norcal.png"
            alt="Norcal VGC Logo"
            width={300}
            height={300}
            className="hover:opacity-80 transition-opacity"
          />
        </Link> */}
        
        <div className="flex h-16 items-center">
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-white px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/players" 
              className="text-white px-3 py-2 text-sm font-medium"
            >
              Players
            </Link>
            <Link 
              href="/past-seasons" 
              className="text-white px-3 py-2 text-sm font-medium"
            >
              Past Seasons
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
