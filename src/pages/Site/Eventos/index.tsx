import { useEffect, useState } from "react";
import CardEvento from "../../../components/CardEvento";
import { listarEventos } from "../../Evento/evento.service";
import { Evento } from "../../Evento/evento.types";

export default function Eventos() {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    listarEventos()
      .then((dados) => {
        setEventos(dados);
      })
  }, []);

  return (
    <>
      <div className="row">

        {
          eventos.map((evento) => {
            return (
            <div className="col-sm-6 col-md-4 col-lg-3">
              <CardEvento evento={evento} />
            </div>)
          })
        }


      </div>
    </>
  )
}