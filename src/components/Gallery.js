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
    <div className="container mx-auto pt-4 pb-0 sm:pt-5 px-4 sm:px-5">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.allFile.edges.map((item, index) => {
          return (
            <GatsbyImage
              onClick={() => {
                openLightbox(index)
              }}
              className="rounded-lg cursor-pointer"
              image={item.node.childImageSharp.gatsbyImageData}
              alt=""
              loading="lazy"
            />
          )
        })}
      </Masonry>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImg}
              views={data.allFile.edges.map((x) => ({
                src: x.node.childImageSharp.resize.src,
                width: x.node.childImageSharp.resize.width,
                height: x.node.childImageSharp.resize.height,
              }))}
              styles={{
                container: (base) => ({
                  ...base,
                  height: '100vh',
                }),
                view: (base) => ({
                  ...base,
                  alignItems: 'center',
                  display: 'flex ',
                  height: '100vh',
                  justifyContent: 'center',

                  '& > img': {
                    maxHeight: '100vh',
                  },
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default Gallery
