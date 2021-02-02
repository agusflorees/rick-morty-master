import React from 'react'

const Inicio = () => {

    const imagen = 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/11-cosas-que-no-sabias-de-rick-y-morty/rick-morty-breaking-bad/137666528-1-esl-ES/rick-morty-breaking-bad.jpg'


    return (
        <div>
            <img src={imagen} alt="imagen-principal" width="1200" className="img-thumbnail"/>
        </div>
    )
}

export default Inicio