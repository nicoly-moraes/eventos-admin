import { Outlet } from "react-router-dom";
import style from "./Eventos.module.css";

export default function Site() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">
            Carousel
          </a>
        </nav>
      </header>
      <main role="main">
        <div className={style.eventos + " pb-5 bg-light"}>
          <div className="container">
            <Outlet />
          </div>
        </div>
      </main>
      <div className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Voltar ao topo</a>
          </p>
          <p>
            Este exemplo de álbum é © Bootstrap, mas, por favor, baixe e customize
            por conta própria.
          </p>
          <p>
            Novo no Bootstrap? <a href="../../">Visite a página principal</a> ou
            leia nosso guia <a href="../../getting-started/">getting started</a>.
          </p>
        </div>
      </div>
    </>
  );
}