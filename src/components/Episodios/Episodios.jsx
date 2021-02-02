import React, { useState, useEffect } from "react";
import CartaEpi from "./CartaEpi";

const Episodios = () => {
  const [epi, setEpi] = useState([]);

  useEffect(() => {
    const traerEpi= async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/episodes");
        const { results } = await res.json();
        console.log(res);
        setEpi([...results]);
      } catch (error) {
        console.log(error);
      }
    };

    traerEpi();
  }, []);
  return (
    <section className="contenedor-epi">
      {epi.map((epi, id) => (
        <CartaEpi key={id} epi={epi} />
      ))}
    </section>
  );
};

export default Episodios;
