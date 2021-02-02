import React from "react";

const Episodios = () => {
  const getEpisodes = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await res.json();
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  getEpisodes();

  const imagenEpisodios =
    "https://cdn.lanetaneta.com/wp-content/uploads/2019/10/Rick-y-Morty-los-10-mejores-episodios-hasta-ahora-seg%C3%BAn-780x405.jpg";

  return (
    <div>
      <div>
        <h1 className="shadow-none p-1 mb-5 bg-light rounded">Episodios</h1>
      </div>
      <div>
        <img
          src={imagenEpisodios}
          alt="episodios"
          width="1200"
          className="img-thumbnail"
        />
      </div>
    </div>
  );
};

export default Episodios;
