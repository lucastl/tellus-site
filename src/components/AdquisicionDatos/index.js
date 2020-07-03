import React from 'react'
import TipoDato from "../../components/TipoDato";

const AdquisiconDatos = ({ title, tiposDatos }) => {
    return (
        <section className="module-home">
            <h2>{title}</h2>
            {
                tiposDatos.map(tipoDato => (
                    <TipoDato
                        name={tipoDato.name}
                        link={tipoDato.link}
                        metodosAdquisicion={tipoDato.metodosAdquisicion}
                    />
                ))
            }
        </section>
    );
}

export default AdquisiconDatos;