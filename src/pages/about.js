import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const aboutPages = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="max-w-2xl mx-auto px-4">
        <div>
          <h1 className="my-8 text-3xl font-bold">About</h1>
          <h2 className="my-8 text-2xl font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            quam nobis consequuntur cumque dolorum voluptas corporis inventore,
            aut, porro perferendis hic excepturi? Repellendus, non eaque libero
            nihil iure illo saepe?
          </h2>
        </div>
        <div>
          <StaticImage src="../images/IMG_0292.jpg" />
          <p className="my-8 text-xl font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            quam nobis consequuntur cumque dolorum voluptas corporis inventore,
            aut, porro perferendis hic excepturi? Repellendus, non eaque libero
            nihil iure illo saepe?
          </p>
          <p className="my-8 text-xl font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            quam nobis consequuntur cumque dolorum voluptas corporis inventore,
            aut, porro perferendis hic excepturi? Repellendus, non eaque libero
            nihil iure illo saepe?
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default aboutPages
