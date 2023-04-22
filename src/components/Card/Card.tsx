import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./card.module.scss";
import { AppContext } from "../../context/AppContext";

interface Props {
  title: string;
  id: number;
}
const Card = ({ title, id }: Props) => {
  const { setFirstLetterUpperCase } = useContext(AppContext);

  const name = setFirstLetterUpperCase(title);
  return (
    <Link to={`pokemon/${id}`}>
      <div className={style.card}>
        <div className={style.cardImage}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={title}
            className={style.img}
          />
        </div>
        <div className={style.titleBox}>
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
