import React from 'react'

const exp = () => {
  return (
    <div className='exp' >
      <h1 className='mt-12 mb-4 text-2xl ' style={{color:'seagreen'}}  >Experience</h1>
      <div >
        <h2 style={{color:'seagreen'}} >Platform Engineer</h2>
        <h4 style={{color:'seagreen'}} className='mb-4'  > Intern - Thoucentric Labs </h4>
        <ul style={{color:'seagreen'}} className='arrow-list'  >
          <li>Implemented authentication for Argo Workflows from scratch && included Nginx Ingress and TLS/SSL protocol</li>
          <li>Developed a UI solution for teammates to access database tables or schemas, which sends an email notification to the database admin when a privilege is taken using Flask and PostgreSQL</li>
          <li>Created a Python script to keep only the latest 10 Docker images with specified tags in a repository, successfully deleting older images</li>
        </ul>
      </div>

      <div>
        <h1 className='mt-12 mb-5 text-2xl ' style={{color:'seagreen'}} >Projects</h1>
        <ul style={{color:'seagreen'}} className='arrow-list'  >
          <h4 className='mb-2' >E-commerce website Project</h4>
          <li>Built an e-commerce demo website from the start using TypeScript and java where i used REST API to connect front-end & back-end using spring data rest,where a customer was able to place an order and would receive and orderID( token) if the order was placed</li>
          <h4 className='mb-2' >Movie Recommender System</h4>
          <li>Built a movie recommender system using tfidf vectorizer , porter- stemmer and cosine similarity , dataset Kaggle API.</li>
          <h4 className='mb-2' >IPL data analysis</h4>
          <li>Developed IPL data analysis project utilizing numpy, pandas, and matplotlib to extract valuable insights from the dataset. Applied data science techniques to uncover patterns, trends, and performance metrics</li>
          <h4 className='mb-2' >Deployed an application on Various Cloud Platforms</h4>
          <li>Successfully developed an application using Flask,Django, PostgreSQL and deployed them in AWS as well as Azure</li>
        </ul>
      </div>

    </div>
  )
}

export default exp