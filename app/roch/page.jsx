import Link from 'next/link'
import React from 'react'

const roch = () => {
  return (

   
    <div>
        <div className='bien' >
            <p id='p1' >Bienvenue 👋 </p>
            <p id='p2' > I'm Rochishnu Paliwal</p>
            <p id='p3' > ❤️ Tech  </p>
        </div>
        <div className='about' > 
            <div>
                <h3 className='mb-12 text-2xl' >About</h3>
                <p>
                I enjoy building things that solve problems of people across the world. Also, I'm a Junior pursuing Bachelor's of Technology (B.Tech) in Computer Science ( 2019 - 2023 ).
                </p>
                <p>
                I've had the privilege of a working at a start-up where I worked as a Front-end Engineer Intern. Also I've been actively collaborating and contributing with Open Source Organizations like Eclipse Foundation and HITK Tech Community for creating various Open Source Products. 
                </p>
            </div>
            <div>
                <h3 className='mt-4' >Get in Touch</h3>
                <p>
                I'm currently looking for Internships, Full-Time opportunities or any Open Source Collaborations, my inbox is always open.
                </p>
            </div>
            <div>
                <h3>On the Web</h3>
                <Link href="#">
                    github page
                </Link>
                <Link href="#">
                    LinkedIn page
                </Link>
                <Link href="#">
                    Phone no page
                </Link>
            </div>
        </div>
    </div>

  )
}

export default roch