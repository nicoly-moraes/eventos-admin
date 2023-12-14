import { Link } from "react-router-dom";
import { Evento } from "../../pages/Evento/evento.types";
import style from "./cardEvento.module.css";

export default function CardEvento(props: {evento: Evento}) {
  return (
    <>
    <Link to={'/site/eventos/' + props.evento.id}>
      <div className={style.card + " card mb-4 shadow-sm"}>
        <img
          className={style.cardImgTop + " card-img-top"}
          src={"http://localhost:8080" + props.evento.img}
          alt={"Imagem " + props.evento.nome}
        />
        <div className="card-body">
          <h4 className="card-text">{props.evento.nome}</h4>
          <h5>{props.evento.data}</h5>
          <p>{props.evento.endereco.logradouro}</p>
        </div>
      </div>
    </Link>
    </>
  )
}

