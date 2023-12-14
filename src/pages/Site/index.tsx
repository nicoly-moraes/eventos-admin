import { Link, Outlet } from "react-router-dom";
import style from "./Eventos.module.css";

export default function Site() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">
            Eventos
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
      <footer className="text-muted">
        <div className="container">
          <p className="m-0">® 2023 Eventos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}