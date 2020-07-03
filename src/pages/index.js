import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slider from "../components/Slider";
import AdquisiconDatos from "../components/AdquisicionDatos";
import AreasAplicacion from "../components/AreasAplicacion";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <AdquisiconDatos
      title="Servicios de adquisición de datos"
      tiposDatos={
        [
          {
            name: 'Topográficos',
            link: 'topograficos',
            metodosAdquisicion: ['Lidar', 'GNSS', 'Fotogrametría']
          },
          {
            name: 'Geofísicos',
            link: 'geofisicos',
            metodosAdquisicion: ['Geosísmica', 'Geoeléctrica']
          },
          {
            name: 'Suelos',
            link: 'suelos',
            metodosAdquisicion: ['Indirectos: A partir de métodos geofísicos', 'Directos: SPT/DPL, Calicata, Muestreo']
          }
        ]
      }
    />
    <AreasAplicacion
      title="Áreas de aplicación"
      areas={
        [
          {
            name: 'Agricultura',
            link: 'agricultura'
          },
          {
            name: 'Consultoría',
            link: 'consultoria'
          },
          {
            name: 'Energía',
            link: 'energia'
          },
          {
            name: 'Minería',
            link: 'mineria'
          },
          {
            name: 'Obra civil',
            link: 'obra-civil'
          },
          {
            name: 'Petróleo y Gas',
            link: 'petroleo-gas'
          },

        ]
      }
    />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
