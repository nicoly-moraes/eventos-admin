import { useEffect, useState } from "react";
import { listarPedidos } from "./pedidos.service";
import { Pedido } from "./pedidos.types";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    listarPedidos()
      .then((dados) => {
        setPedidos(dados);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title m-0">
                Pedidos
              </h4>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-borderless">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Evento</th>
                    <th>Usuário</th>
                    <th>Ingresso</th>
                    <th>Setor</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="align-middle">
                          {item.data}
                        </td>
                        <td className="align-middle">
                          {item.nomeEvento}
                        </td>
                        <td className="align-middle">
                          {item.nomeUsuario}
                        </td>
                        <td className="align-middle">
                          {item.nomeIngresso}
                        </td>
                        <td className="align-middle">
                          {item.nomeSetor}
                        </td>
                      </tr>
                    )
                  })}
                  {pedidos.length == 0 &&
                    <tr>
                      <td className="text-center" colSpan={2}>Nenhum pedido registrado</td>
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