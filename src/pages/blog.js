import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const blogPage = ({ data }) => {
    return(
        <Layout pageTitle="My Blog posts">
            <p>My first fucking blog</p>
            <ul>
                {
                    data.allFile.nodes.map(
                        node => (
                            <li key={ node.name }> { node.name } </li>
                        )
                    )
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default blogPage