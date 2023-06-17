import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='exp' >
        <h1 className='mt-12 mb-4 text-2xl' style={{color:'seagreen'}}  >About Me!</h1>
        <p style={{color:'seagreen'}} className='mb-6 text-l '  >
          I've been Coding since my 1st year in Uni and have developed interest in Software Engineering and Data Science.
          These topics fascinate me and I love researching more about them.
          I was able to clear the AWS certified developer cloud associate exam in my FIRST attempt and now I am officially AWS certified developer associate
          I was also the lead coordinator of Economics Industry Project , where i managed all students as well as communicated with different clients , which gave me insights on how real-world projects take place .
        </p>
        <Link href="https://24fc9b73-445a-4bd5-9326-56034970d50e.filesusr.com/ugd/7448df_5034504345144d65a08854d2a13629cb.pdf" className='mt-1 mb-5 hover:text-blue underline underline-offset-2  ' > Proof of my AWS Certification </Link>
        <p className='mb-6 mt-6 text-l ' style={{color:'seagreen'}} >
          My current fav tech-stacks include - Python, Java, PostgreSql ,React, NextJs , Django, AWS , Azure , Flask && Angular( IKR!!! )
        </p>
        <p className='mb-6 text-l ' style={{color:'seagreen'}} >Apart from my tech geekiness, I am huge a BasketBall fan ( MJ &gt; LBJ ) and I love exploring different cultures , right now I am learning to speak French</p>
        <p className='mb-6 text-l ' style={{color:'seagreen'}} >In life, my ultimate aspiration is to evolve into an exceptional engineer, equipped with the ability to overcome any challenge that comes my way.</p>
        <p className='mb-6 text-l ' style={{color:'seagreen'}} > I am passionate about Technology and learning new skills to bring outputs. During my uni journey, I tried working with several languages/frameworks and like AWS lambda , DynamoDB , S3 , Elastic Beanstalk , C/C++, Java, TypeScript , Nodejs ,Python, R, Hadoop, MySQL, Flutter, Android Studio and MongoDB, and making some end products using some of them.

​

Hard-work with dedication is what defines my way of working. 

 </p>
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