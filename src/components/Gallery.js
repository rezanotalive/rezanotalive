import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Carousel, { ModalGateway, Modal } from 'react-images'

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
      <div className="gallery">
        {data.allFile.edges.map((item, index) => {
          return (
            <div className="pics shadow-lg">
              <GatsbyImage
                onClick={() => {
                  openLightbox(index)
                }}
                className="rounded-xl"
                image={item.node.childImageSharp.gatsbyImageData}
                alt={'pics' + index}
                loading="lazy"
              />
            </div>
          )
        })}
      </div>
      <ModalGateway>
        {viewerIsOpen && (
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
        )}
      </ModalGateway>
    </div>
  )
}

export default Gallery
