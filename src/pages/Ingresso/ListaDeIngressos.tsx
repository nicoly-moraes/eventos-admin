import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { excluirIngresso, listarIngressosPorSetorId } from "./ingresso.service";
import { Ingresso } from "./ingresso.types";
import { Setor } from "../Setor/setor.types";
import { listarSetorPorId } from "../Setor/setor.service";
import { confirm, toast } from "../../helpers/alert.helper";

export default function ListaDeIngressos() {
  const [ingressos, setIngressos] = useState<Ingresso[]>([]);
  const [setor, setSetor] = useState<Setor>();
  const { setorId } = useParams();

  useEffect(() => {
    listarIngressosPorSetorId(Number(setorId))
      .then((dados) => {
        setIngressos(dados);
      });

    listarSetorPorId(Number(setorId))
      .then((dados) => {
        setSetor(dados);
      })
  }, []);

  const deletarIngresso = (ingresso: Ingresso) => {
    if (ingresso.id != undefined) {
      confirm('warning',`Confirmar exclusão do igresso: ${ingresso.nome}`)
        .then((result) => {
            if (result.isConfirmed) {
              excluirIngresso(ingresso.id)
                .then(() => {
                    const filtro = ingressos.filter(item => item.id != ingresso.id);
                    setIngressos(filtro);
                    toast('success', 'Ingresso excluído com sucesso');
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
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h4 className="card-title m-0 text-center m-1">
                Ingressos do setor {setor?.nome}
              </h4>
              <Link to={`/setor/ingresso/cadastrar/${setorId}`}>
                <button className="btn btn-primary m-1">
                  <i className="fa fa-plus"></i> Ingresso
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-borderless text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Quantidade de Ingressos</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {ingressos.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="align-middle">
                          {item.setor_id}
                        </td>
                        <td className="align-middle">
                          {item.nome}
                        </td>
                        <td className="align-middle">
                          {item.valor}
                        </td>
                        <td className="align-middle">
                          {item.qtd_limite}
                        </td>
                        <td className="align-middle">
                          <div className="d-flex justify-content-end">
                            <Link to={`/setor/ingresso/atualizar/${item.id}`}>
                                <button className="btn btn-primary btn-sm mx-1" title="Editar ingresso">
                                  <i className="fa fa-edit m-0"></i>
                                </button>
                            </Link>
                            <button className="btn btn-danger btn-sm mx-1" title="Excluir ingresso" onClick={() => deletarIngresso(item)}>
                              <i className="fa fa-trash-o m-0"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                  {ingressos.length == 0 &&
                    <tr>
                      <td className="text-center" colSpan={5}>Nenhum ingresso cadastrado</td>
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