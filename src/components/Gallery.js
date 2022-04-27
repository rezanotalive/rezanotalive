import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import MyGrid from './MyGrid'
import MyModal from './MyModal'

const Gallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                resize(jpegQuality: 80, height: 1000, jpegProgressive: true) {
                  src
                  height
                  width
                }
              }
            }
          }
        }
      }
    `
  )

  const [currentImg, setCurrentImg] = React.useState(0)
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false)

  const openLightbox = React.useCallback((index) => {
    setCurrentImg(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setViewerIsOpen(false)
    setCurrentImg(0)
  }

  return (
    <div>
      <MyGrid>
        {data.allFile.edges.map((item, index) => {
          return (
            <GatsbyImage
              onClick={() => {
                openLightbox(index)
              }}
              className="rounded-xl shadow-md cursor-pointer hover:opacity-80"
              image={item.node.childImageSharp.gatsbyImageData}
              alt={`picture` + index}
              loading="lazy"
              key={index}
            />
          )
        })}
      </MyGrid>
      <MyModal props={viewerIsOpen} i={closeLightbox} u={currentImg} />
    </div>
  )
}

export default Gallery
