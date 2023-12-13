import { FormEvent, useEffect, useState } from "react";
import { toast } from "../../helpers/alert.helper";
import { Setor } from "./setor.types";
import { atualizarSetor, criarSetor, listarSetorPorId } from "./setor.service";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSetor() {
  const { setorId } = useParams();
  const [nome, setNome] = useState('');
  const [eventoId, setEventoId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    listarSetorPorId(Number(setorId))
    .then((dados) => {
      setNome(dados.nome);
      setEventoId(dados.evento_id);
    });
  }, []);

  const enviarFormulario = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (nome === '') {
      toast('error', 'Nome é obrigatório');
      return;
    }

    const dados: Setor = {
      id: Number(setorId),
      nome,
      evento_id: Number(eventoId)
    };

    atualizarSetor(Number(setorId), dados)
      .then(() => {
        form.reset();
        toast('success', 'Setor atualizado');
        navigate(`/evento/${eventoId}/setor/listar`)
      })
      .catch((error) => {
        console.error(error);
        toast('error', 'Ops, algo deu errado');
      });
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="iq-card">
          <div className="iq-card-header d-flex justify-content-between">
            <div className="iq-header-title">
              <h4 className="card-title">Atualizar Setor</h4>
            </div>
          </div>
          <div className="iq-card-body">
            <div className="new-user-info">
              <form onSubmit={enviarFormulario}>
                <div className="row">
                  <div className="form-group col-lg-12">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Nome do setor"
                      onChange={(event) => setNome(event.target.value)} 
                      value={nome}
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>  
                <div className="d-flex justify-content-center mt-5">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Atualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
