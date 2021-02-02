import React, { useState, useEffect } from "react";
import CartaPjs from "./CartaPjs";

const Personajes = () => {
  const [pjs, setPjs] = useState([]);

  useEffect(() => {
    const traerPjs = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const { results } = await res.json();
        console.log(res);
        setPjs([...results]);
      } catch (error) {
        console.log(error);
      }
    };

    traerPjs();
  }, []);
  return (
    <section className="contenedor-pjs">
      {pjs.map((pjs, id) => (
        <CartaPjs key={id} pjs={pjs} />
      ))}
    </section>
  );
};

export default Personajes;
