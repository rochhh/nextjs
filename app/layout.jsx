import Link from 'next/link'
import './globals.css'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (

    <html lang="en">      
      <body>
        
      <div>
        <div className=' sticky top-0 flex flex-wrap items-center  px-4 py-2  mx-auto bg-slate-50 navbarBorder ' >
          <nav className=' flex justify-center' >
            <Link href="http://localhost:3000" className='self-center font-semibold text-lg ml-20 mr-20 py-4 px-6 text-black hover:text-emerald-700 ml ' > Roch </Link>
            <Link href="/exp" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-black hover:text-emerald-700 ml ' >Experience </Link>
            <Link href="https://drive.google.com/file/d/12GlOof_b2W16fv811N5nOS6f6_W4RuU3/view?usp=sharing" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-black hover:text-emerald-700 ml ' > Resume </Link>
            <Link href="/aboutme" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-black hover:text-emerald-700 ml ' > About me </Link>
          </nav>
          <Image src="/aws_thumb_image.png" width={400} height={300} className='changePos ' /> 
        </div>
      </div>
        {children}
        </body>
      
    </html>
  )
}

