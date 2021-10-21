import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const aboutPages = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="max-w-2xl mx-auto px-4 mb-20 md:mb-60">
        <div>
          <h1 className="my-10 text-4xl font-bold">About</h1>
        </div>
        <div className="my-5">
          <StaticImage
            src="../images/20210220185430_IMG_2248.jpg"
            loading="lazy"
          />
        </div>
        <div className="text-2xl font-sans">
          <p className="my-4">👋 Hi there!</p>
          <p className="my-3">
            I'm not a photographer and a programmer, based in Indonesia. I'm
            just a man who loves to make some code and take pictures. I was also
            enthusiastic about art, hiking, and music.
          </p>
          <p className="my-4">
            In my free time, I like to explore the city by bus.
          </p>
          <p className="my-4">Hit me up for 🤝 collaboration.</p>
        </div>
      </div>
    </Layout>
  )
}

export default aboutPages
