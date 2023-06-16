import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='exp' >
        <h1 className='mt-12 mb-4 text-2xl ' >About Me!</h1>
        <p style={{color:'seagreen'}} className='mb-10 text-l '  >
          I've been Coding since my 1st year in Uni and have developed interest in Software Engineering and Data Science.
          These topics fascinate me and I love researching more about them.
        </p>
        <p className='mb-8 text-l ' style={{color:'seagreen'}} >
          My current fav tech-stacks include - Python, Java, PostgreSql ,React, NextJs , Django, AWS , Azure , Flask && Angular( IKR!!! )
        </p>
        <p className='mb-8 text-l ' style={{color:'seagreen'}} >Apart from my tech geekiness, I am huge a BasketBall fan ( MJ &gt; LBJ ) and I love exploring different cultures , right now I am learning to speak French</p>
        <p className='mb-8 text-l ' style={{color:'seagreen'}} >In life, my ultimate aspiration is to evolve into an exceptional engineer, equipped with the ability to overcome any challenge that comes my way.</p>
        <p className='mb-8 text-l ' style={{color:'seagreen'}} >Feel free to contact me on :-</p>

        <div className='container place-content-center' >
                    <Link href="https://github.com/rochhh" className='ml-10 bg-transparent hover:bg-emerald-700 font-semibold  hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' >
                        github page
                    </Link>
                    <Link className='ml-10 bg-transparent hover:bg-emerald-700 font-semibold  hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'  href="https://www.linkedin.com/in/rochishnu-paliwal">
                        LinkedIn page
                    </Link>
                    <Link className='ml-10 bg-transparent hover:bg-emerald-700 font-semibold  hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'  href="mailto:rochishnu7@gmail.com"> Mail </Link>
                    <p className='ml-10 disp '>
                        +91-9820918159 
                    </p>
                </div>    
                

      </div>
    </div>
  )
}

export default page