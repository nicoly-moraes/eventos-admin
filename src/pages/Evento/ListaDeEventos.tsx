import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { listarEventos } from "./evento.service";
import { Evento } from "./evento.types";

export default function ListaDeEventos() {
  const [eventos, setEventos] = useState([] as Evento[]);

  useEffect(() => {
    listarEventos()
      .then((dados) => {
        setEventos(dados);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title m-0">
                Eventos
              </h4>
              <Link to="/evento/cadastrar">
                <button className="btn btn-primary">
                  <i className="fa fa-plus"></i> Evento
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-borderless">
                <thead>
                  <tr>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Endereço</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {eventos.map((item) => {
                    return (
                      <tr>
                        <td className="align-middle">
                          <img src={logo} alt="imagem nome do evento" height="50px" />
                        </td>
                        <td className="align-middle">
                          {item.nome}
                        </td>
                        <td className="align-middle">
                          {item.data}
                        </td>
                        <td className="align-middle">
                          Logradouro, numero, complemento, bairro, cidade - uf, cep
                        </td>
                        <td className="align-middle">
                          <button className="btn btn-primary btn-sm mx-1">
                            <i className="fa fa-edit m-0"></i>
                          </button>
                          <button className="btn btn-danger btn-sm mx-1">
                            <i className="fa fa-trash-o m-0"></i>
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}