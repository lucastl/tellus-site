import React from 'react'
import Area from "../../components/Area";

const AreasAplicacion = ({ title, areas }) => {
    return (
        <section className="module-home">
            <h2>{title}</h2>
            {
                areas.map(area => (
                    <Area
                        name={area.name}
                        link={area.link}
                    />
                ))
            }
        </section>
    );
}

export default AreasAplicacion;