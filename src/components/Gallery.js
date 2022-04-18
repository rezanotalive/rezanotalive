import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

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

  // const [modalIsOpen, setIsOpen] = React.useState(false)
  // const [tmp, setTmp] = React.useState('')
  // const openModal = (imgSrc) => {
  //   setTmp(imgSrc)
  //   setIsOpen(true)
  // }
  // const closeModal = () => {
  //   setIsOpen(false)
  // }

  return (
    <div>
      {/* <Modal
        className={modalIsOpen ? 'Modal open' : 'Modal'}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <GatsbyImage image={tmp} />
      </Modal> */}
      <div className="gallery">
        {data.allFile.edges.map((item, index) => {
          return (
            <GatsbyImage
              className="pics"
              image={item.node.childImageSharp.gatsbyImageData}
              alt={'pics' + index}
              loading="lazy"
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
