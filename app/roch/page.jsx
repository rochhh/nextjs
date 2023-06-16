import Link from 'next/link'
import React from 'react'

const roch = () => {
  return (

   
    <div className='container mx-auto sticky top-0  ' >
        <div className='bien' >
            <p id='p1'  >Bienvenue 👋 </p>
            <p id='p2' > I'm Rochishnu</p>
            <p id='p3' >    ❤️ Tech  </p>
        </div>
        <div className='about' > 
            <div className='container' >
                <div>
                    <h3 className='mb-6 text-2xl' >Who am I</h3>
                    <p className='mb-8' >
                    I am an accomplished BTECH CSE graduate from the 2019-2023 batch, equipped with a solid foundation in computer science and engineering. With my technical prowess and academic achievements, I stand poised to embark on a promising career in the dynamic world of technology. My dedication, coupled with the skills acquired during my degree, positions me as a valuable asset ready to make a significant impact in the industry.
                    </p>
                    <p>
                    I am an enthusiastic computer science student fueled by a deep passion for technology. With an insatiable curiosity, I delve into the world of coding and programming, constantly seeking new ways to build and create. My heart thrives on the satisfaction of solving complex problems, where each challenge becomes an opportunity for growth. In this realm where imagination merges with logic, I embrace the power of innovation, shaping the future one line of code at a time.
                    </p>
                </div>
                <div>
                    <h3 className='mt-8 mb-5 text-2xl ' >Get in Touch</h3>
                    <p>
                    I'm currently looking for Internships, Full-Time opportunities or any Open Source Collaborations.
                    </p>
                </div>
            </div>
            <div>
                <h3 className='mt-4 mb-6 text-2xl ' > On the Web</h3>
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
    </div>

  )
}

export default roch