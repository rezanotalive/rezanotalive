import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Masonry from 'react-masonry-css'
import { GatsbyImage } from 'gatsby-plugin-image'
import Carousel, { Modal, ModalGateway } from 'react-images'

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  }

  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          nodes {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              resize(height: 1350) {
                src
                height
                width
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
      <div className="container mx-auto py-4 sm:py-5 px-4 sm:px-5">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.allFile.nodes.map((item, index) => {
            return (
              <div key={index} className="rounded-lg shadow-lg cursor-pointer">
                <GatsbyImage
                  onClick={() => {
                    openLightbox(index)
                  }}
                  className="rounded-lg cursor-pointer"
                  image={item.childImageSharp.gatsbyImageData}
                  alt=""
                  loading="lazy"
                />
              </div>
            )
          })}
        </Masonry>
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              loading="lazy"
              currentIndex={currentImg}
              views={data.allFile.nodes.map((x) => ({
                src: x.childImageSharp.resize.src,
                width: x.childImageSharp.resize.width,
                height: x.childImageSharp.resize.height,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default Gallery
