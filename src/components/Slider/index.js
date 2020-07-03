import React, { useState } from 'react'
import Img from "gatsby-image"

import './style.css';

import { useStaticQuery, graphql } from 'gatsby'

function Slider() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]

  // setTimeout(() => {
  //   handleNext();
  // }, 10000)

  return (
    <section
      style={{
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <Img
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, ' ').substring(2)}
      />
      <button
        onClick={() => handlePrevious()}
        className="btn-slider back"
      >
        <span>&#8678;</span>
      </button>
      <button
        onClick={() => handleNext()}
        className="btn-slider next"
      >
        <span>&#8680;</span>
      </button>
    </section>
  )
}

export default Slider;