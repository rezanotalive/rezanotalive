import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Carousel, { ModalGateway, Modal } from 'react-images'
import MyGrid from './MyGrid'

const Gallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  jpgOptions: { progressive: true }
                  formats: WEBP
                )
                resize(
                  height: 1000
                  jpegProgressive: true
                  toFormat: WEBP
                  webpQuality: 80
                ) {
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
