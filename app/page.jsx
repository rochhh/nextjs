import Link from 'next/link'
import './globals.css'

// const data = [
//   {id:1 , fname: "roch" , age:22 },
//   {id:2 , fname: "rochi" , age:2 },
//   {id:3 , fname: "rochis" , age:222 },
//   {id:4 , fname: "rochish" , age:245 },
//   {id:5 , fname: "rochishn" , age:226 },
//   {id:6 , fname: "rochishnu" , age:229 }
// ]


const page = () => {

  return ( 
      <div>
        <div className='flex flex-wrap items-center  px-4 py-2  mx-auto bg-emerald-500  ' >
          <nav className=' flex bg-emerald-500 justify-center ' >
            <Link href="/roch" className=' self-center font-semibold text-lg ml-20 mr-20 py-4 px-6 text-white hover:text-emerald-700 ' > Roch </Link>
            <Link href="/exp" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-white hover:text-emerald-700 ' >Experience </Link>
            <Link href="/resume" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-white hover:text-emerald-700 ' > Resume </Link>
            <Link href="/contact" className=' font-semibold text-lg ml-20 mr-20 py-4 px-6 text-white hover:text-emerald-700 ' > Contact </Link>
          </nav>
        </div>
      </div>
  )
}

export default page