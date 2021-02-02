import React from "react";

const CartaPjs = ({ pjs }) => {
  return (
    <div className="carta-pjs">
      <h1 className="nombre-pj">{pjs.name}</h1>
      <div className="carta-pj-sub">
        <img src={pjs.image} alt="img-pj" className="img-pj" />
        <div className="txt-carta">
          <p className="especie-pj">Especie: {pjs.species}</p>
          <p className="estado-pj">Estado: {pjs.status}</p>
        </div>
      </div>
    </div>
  );
};

export default CartaPjs;
