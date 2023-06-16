import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (

    <html lang="en">      
      <body>
        
      <div>
        <div className='flex flex-wrap items-center  px-4 py-2  mx-auto bg-slate-50' >
          <nav className=' flex justify-center' >
            <Link href="/roch" className='self-center font-semibold text-lg ml-20 mr-20 py-4 px-6 text-black hover:text-emerald-700 ml ' > Roch </Link>
            <Link href="/exp" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-black hover:text-emerald-700 ml ' >Experience </Link>
            <Link href="/resume" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-black hover:text-emerald-700 ml ' > Resume </Link>
            <Link href="/contact" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-black hover:text-emerald-700 ml ' > Contact </Link>
          </nav>
        </div>
      </div>
        {children}
        </body>
      
    </html>
  )
}

