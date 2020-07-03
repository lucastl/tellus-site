import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import './style.css';


const Area = ({ name, link }) => {

  const data = useStaticQuery(graphql`
    query {
      agricultura: file(relativePath: { eq: "agricultura.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      consultoria: file(relativePath: { eq: "consultoria.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      energia: file(relativePath: { eq: "energia.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mineria: file(relativePath: { eq: "mineria.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            srcSetWebp
          }
        }
      }
      obracivil: file(relativePath: { eq: "obracivil.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      petroleogas: file(relativePath: { eq: "petroleogas.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let img;
  switch (link) {
    case 'agricultura':
      img = data.agricultura.childImageSharp.fluid;
      break;
    case 'consultoria':
      img = data.consultoria.childImageSharp.fluid;
      break;
    case 'energia':
      img = data.energia.childImageSharp.fluid;
      break;
    case 'mineria':
      img = data.mineria.childImageSharp.fluid;
      break;
    case 'obra-civil':
      img = data.obracivil.childImageSharp.fluid;
      break;
    case 'petroleo-gas':
      img = data.petroleogas.childImageSharp.fluid;
      break;
  }

  return (
    <Link className="area" to={`/areas-aplicacion/${link}`}>
      <BackgroundImage
        Tag="article"
        className={'background-image wrap-area'}
        fluid={img}
        backgroundColor={`#040e18`}
      >
        <h3
          className="title-area"
        >
          {name}
        </h3>
      </BackgroundImage>
    </Link>
  );
}

export default Area;