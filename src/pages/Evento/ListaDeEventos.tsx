import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { excluirEvento, listarEventos } from "./evento.service";
import { Evento } from "./evento.types";
import { confirm, toast } from "../../helpers/alert.helper";

export default function ListaDeEventos() {
  const [eventos, setEventos] = useState([] as Evento[]);

  useEffect(() => {
    listarEventos()
      .then((dados) => {
        setEventos(dados);
      });
  }, []);

  const formatarCep = (cep: number) => {
    const cepArray = cep.toString().split('');
    cepArray.splice(5, 0, '-');
    return cepArray.join('');
  }

  const deletarEvento = (evento: Evento) => {
    if (evento.id != undefined) {
      confirm('warning',`Confirmar exclusão do Evento: ${evento.nome}`)
        .then((result) => {
            if (result.isConfirmed) {
              excluirEvento(evento.id)
                .then(() => {
                    const filtro = eventos.filter(item => item.id != evento.id);
                    setEventos(filtro);
                    toast('success', 'Evento excluído com sucesso');
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
                  {eventos.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="align-middle">
                          <img src={`http://localhost:8080${item.img}`} alt="imagem nome do evento" height="50px" />
                        </td>
                        <td className="align-middle">
                          {item.nome}
                        </td>
                        <td className="align-middle">
                          {item.data}
                        </td>
                        <td className="align-middle">
                          {item.endereco.logradouro + ', '} 
                          {item.endereco.numero ? item.endereco.numero + ', ' : ''} 
                          {item.endereco.complemento ? item.endereco.complemento + ', ' : ''} 
                          {item.endereco.cidade + '-'}
                          {item.endereco.uf + ', '} 
                          {formatarCep(item.endereco.cep)}
                        </td>
                        <td className="align-middle" width="140px">
                          <Link to={`/evento/${item.id}/setor/listar`}>
                            <button className="btn btn-secondary btn-sm mx-1" title="Setores do evento">
                              <i className="ri-treasure-map-line m-0"></i>
                            </button>
                          </Link>
                          <Link to={`/evento/atualizar/${item.id}`}>
                            <button className="btn btn-primary btn-sm mx-1" title="Editar evento">
                              <i className="fa fa-edit m-0"></i>
                            </button>
                          </Link>
                          <button className="btn btn-danger btn-sm mx-1" title="Excluir evento" onClick={() => deletarEvento(item)}>
                            <i className="fa fa-trash-o m-0"></i>
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                  {eventos.length == 0 &&
                    <tr>
                      <td className="text-center" colSpan={2}>Nenhum evento cadastrado</td>
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