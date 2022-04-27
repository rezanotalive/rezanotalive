import { useStaticQuery, graphql } from 'gatsby'
import Carousel, { Modal } from 'react-images'
import React from 'react'

const MyModal = ({ i, u }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              childImageSharp {
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

  return (
    <Modal onClose={i}>
      <Carousel
        currentIndex={u}
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
  )
}

export default MyModal
