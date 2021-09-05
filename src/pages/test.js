import React from 'react'
import { graphql } from 'gatsby'

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        publicURL
      }
    }
  }
`

export default ComponentName
