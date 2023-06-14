import './globals.css'
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ErrorBoundary fallback={<Error />} >
        <Navbar />
      </ErrorBoundary>
      <body>{children}</body>
    </html>
  )
}

const Navbar = () => {
  return (
    <div >
    <nav className="bg-gray-800 flex  text-center">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <h2 className="text-white margin font-bold text-xl ">Rochishnu</h2>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/exp">
                  <h2 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Experience
                  </h2>
                </Link>
                <Link href="/contact">
                  <h2 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                  </h2>
                </Link>
                <Link href="/error">
                  <h2 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Resume
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
};

