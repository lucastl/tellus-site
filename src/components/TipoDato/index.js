import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import './style.css';


const TipoDato = ({ name, link, metodosAdquisicion }) => {

  const data = useStaticQuery(graphql`
    query {
      topograficos: file(relativePath: { eq: "topograficos.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      geofisicos: file(relativePath: { eq: "geofisicos.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      suelos: file(relativePath: { eq: "suelos.jpg" }) {
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
    case 'topograficos':
      img = data.topograficos.childImageSharp.fluid;
      break;
    case 'geofisicos':
      img = data.geofisicos.childImageSharp.fluid;
      break;
    case 'suelos':
      img = data.suelos.childImageSharp.fluid;
  }

  return (
    <Link className="tipo-dato" to={`/adquision-datos/${link}`}>
      <BackgroundImage
        Tag="article"
        className={'background-image'}
        fluid={img}
        backgroundColor={`#040e18`}
      >
        <h3
          className="title-tipo-dato"
        >
          {name}
        </h3>
        <ul className="metodos-adquisicion">
          {
            metodosAdquisicion.map(metodo => (
              <li className="metodo-adquisicion">
                {metodo}
              </li>
            ))
          }
        </ul>
      </BackgroundImage>
    </Link>
  );
}

export default TipoDato;