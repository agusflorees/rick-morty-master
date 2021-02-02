import React from "react";

const CartaEpi = ({ epi }) => {
  return (
    <div className="carta-epi">
      <h1 className="nombre-epi">{epi.name}</h1>
      <div className="carta-epi-sub">
        <img src={epi.image} alt="img-epi" className="img-epi" />
        <div className="txt-carta">
          <p className="aire-epi">Salio al aire: {epi.air_date}</p>
          <p className="nepisodio-epi">Episodio: {epi.episode}</p>
        </div>
      </div>
    </div>
  );
};

export default CartaEpi;
