import { FormEvent, useEffect, useState } from "react"
import { listarEventoPorId } from "../../Evento/evento.service";
import { useNavigate, useParams } from "react-router-dom";
import { Evento } from "../../Evento/evento.types";
import { listarSetoresPorEventoId } from "../../Setor/setor.service";
import { Setor } from "../../Setor/setor.types";
import { listarIngressosPorSetorId } from "../../Ingresso/ingresso.service";
import { Ingresso } from "../../Ingresso/ingresso.types";
import { cadastrarPedido } from "./pedido.service";
import { Modal } from "bootstrap";
import { toast } from "../../../helpers/alert.helper";

export default function DetalhesDoEvento() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [evento, setEvento] = useState<Evento>();
  const [ingressos, setIngressos] = useState<Ingresso[]>([]);
  const [setores, setSetores] = useState<Setor[]>([]);
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [modal, setModal] = useState<Modal>();
  const [ingressoSelecionado, setIngressoSelecionado] = useState<Ingresso>();

  const iniciarCompra = (ingresso: Ingresso) => {
    setCpf('');
    setNome('');
    setIngressoSelecionado(ingresso);
    modal?.show();
  }

  const carregarIngressos = (setorId: number) => {
    listarIngressosPorSetorId(setorId)
      .then((dados) => {
        setIngressos(dados)
      });
  };

  const comprarIngresso = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cadastrarPedido({
      nome_usuario: nome,
      cpf_usuario: Number(cpf.replace(/\D/g, '')),
      ingresso_id: ingressoSelecionado!.id
    }).then(() => {
      modal?.hide();
      toast('success', 'Compra realizada com sucesso!');
    });
  };

  useEffect(() => {
    const el = document.getElementById('exampleModal') as Element;
    setModal(new Modal(el));

    listarEventoPorId(Number(id))
      .then((dados) => {
        if (dados) {
          setEvento(dados);

          listarSetoresPorEventoId(dados.id)
            .then((dados) => {
              setSetores(dados);
              carregarIngressos(dados[0].id);
            });

        } else {
          navigate('/site/eventos');
        }
      })
      .catch((erro) => {
        navigate('/site/eventos');
      });
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="banner">
          <img className="img-fluid" src={'http://localhost:8080' + evento?.img} alt={'Imagem do evento ' + evento?.nome} />
        </div>
      </div>

      <div className="col-sm-12 my-3">
        <h2 className="blog-post-title text-primary fw-600 mb-4">{evento?.nome}</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="text-dark">
              {evento?.endereco.logradouro + ', '} 
              {evento?.endereco.numero ? evento?.endereco.numero + ', ' : ''} 
              {evento?.endereco.complemento ? evento?.endereco.complemento + ', ' : ''} 
              {evento?.endereco.cidade + '-'}
              {evento?.endereco.uf + ', '}
              <strong className="text-primary">{evento?.endereco.descricao}</strong>
            </h5>
            <p className="mt-3">{evento?.sobre}</p>
          </div>
        </div>
      </div>

      {setores && <div className="col-sm-12 mt-3">
        <div className="accordion">
          <ul className="nav nav-tabs m-0" id="myTab" role="tablist">
            {setores?.map((setor, index) => {
              return (
                <li className="nav-item" role="presentation" key={index}>
                  <button 
                    className={'nav-link ' + (index == 0 ? 'active' : '')}
                    id={'tab' + index}
                    data-toggle="tab" 
                    data-target={'#tabsetor' + index} 
                    type="button" 
                    role="tab" 
                    aria-controls={'tabsetor' + index}  
                    aria-selected={index == 0 ? 'true' : 'false'}
                    onClick={() => carregarIngressos(setor.id)}>
                    {setor.nome}
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="tab-content bg-white rounded" id="myTabContent">
            {setores?.map((setor, index) => 
              <div 
                className={'tab-pane fade ' + (index == 0 ? 'show active' : '')} 
                id={'tabsetor' + index}  
                role="tabpanel" 
                aria-labelledby={'tab' + index}
                key={index}>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Ingresso</th>
                          <th>Valor</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {ingressos.map((ingresso, index) => 
                          <tr key={index}>
                            <td className="align-middle">{ingresso.nome}</td>
                            <td className="align-middle">{ingresso.valor}</td>
                            <td className="align-middle text-right">
                              <button 
                                className="btn btn-success btn-lg"
                                onClick={() => iniciarCompra(ingresso)}>
                                Comprar
                              </button>
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>}

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {ingressoSelecionado?.nome}
                <br/> 
                <span className="badge badge-success">R$ {ingressoSelecionado?.valor}</span>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="row" id="titularForm" onSubmit={(evento) => comprarIngresso(evento)}>
                <div className="col-sm-12 mb-3">
                  <label htmlFor="cpf">CPF</label>
                  <input 
                    type="text"
                    className="form-control"
                    id="cpf"
                    placeholder="CPF do titular do ingresso"
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
                    required />
                </div>
                <div className="col-sm-12 mb-3">
                  <label htmlFor="nome">Nome</label>
                  <input 
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome do titular do ingresso"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    required />
                </div>
              </form>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                form="titularForm"
                className="btn btn-success">
                Confirmar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}