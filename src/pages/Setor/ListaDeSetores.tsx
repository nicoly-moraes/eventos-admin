import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Setor } from "./setor.types";
import { excluirSetor, listarSetoresPorEventoId } from "./setor.service";
import { listarEventoPorId } from "../Evento/evento.service";
import { Evento } from "../Evento/evento.types";
import { confirm, toast } from "../../helpers/alert.helper";

export default function ListaDeSetores() {
  const [evento, setEvento] = useState<Evento>();
  const [setores, setSetores] = useState<Setor[]>([]);
  const { eventoId } = useParams();

  useEffect(() => {
    listarSetoresPorEventoId(Number(eventoId))
      .then((dados) => {
        setSetores(dados);
      });

    listarEventoPorId(Number(eventoId))
      .then((dados) => {
        setEvento(dados);
      })
  }, []);

  const deletarSetor = (setor: Setor) => {
    if (setor.id != undefined) {
      confirm('warning',`Confirmar exclusão do Setor: ${setor.nome}`)
        .then((result) => {
            if (result.isConfirmed) {
              excluirSetor(setor.id)
                .then(() => {
                    const filtro = setores.filter(item => item.id != setor.id);
                    setSetores(filtro);
                    toast('success', 'Setor excluído com sucesso');
                });
            }
        })
    }
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title m-0">
                Setores de {evento?.nome}
              </h4>
              <Link to={`/evento/${eventoId}/setor/cadastrar`}>
                <button className="btn btn-primary">
                  <i className="fa fa-plus"></i> Setor 
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-borderless">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                  </tr>
                </thead>
                <tbody>
                  {setores.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="align-middle">
                          {item.evento_id}
                        </td>
                        <td className="align-middle">
                          {item.nome}
                        </td>
                        <td className="align-middle text-right">
                          
                        <Link to={`/setor/ingresso/listar/${item.id}`}>
                          <button className="btn btn-secondary btn-sm mx-1" title="Ingressos">
                            <i className="fa fa-ticket m-0"></i>
                          </button>
                        </Link>
                          <Link to={`/setor/${item.id}/atualizar`}>
                            <button className="btn btn-primary btn-sm mx-1" title="Editar setor">
                              <i className="fa fa-edit m-0"></i>
                            </button>
                          </Link>
                          <button className="btn btn-danger btn-sm mx-1" title="Excluir setor" onClick={() => deletarSetor(item)}>
                            <i className="fa fa-trash-o m-0"></i>
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                  {setores.length == 0 &&
                    <tr>
                      <td className="text-center" colSpan={2}>Nenhum setor cadastrado</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}