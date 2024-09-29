import React from "react";
import { cardData } from "./data";
import { ButtonCard } from "./buttoncard/buttoncard";
import "./card.css";

export const Card = () => {
  return (
    <div className="card_content">
      {cardData.map((data) => (
        <div key={data.id} className="card-container">
          <div className="card-button">
            <div className="card-image">
              <img src={data.image} alt="image" />
            </div>
            <ButtonCard />
          </div>
          <div className="card-menu">
            <p className="card-nome">{data.nome}</p>
            <p className="card-descricao">{data.descricao}</p>
            <p className="card-preco">${data.preco}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
