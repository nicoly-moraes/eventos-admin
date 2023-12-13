import { FormEvent, useEffect, useState } from "react";
import { toast } from "../../helpers/alert.helper";
import { criarIngresso} from "./ingresso.service";
import { Ingresso } from "./ingresso.types";
import { useNavigate, useParams } from "react-router-dom";
import { CurrencyInput } from "react-currency-mask";

export default function AddIngresso() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [qtdLimite, setQtdLimite] = useState('');
  const navigate = useNavigate();
  const { setorId } = useParams();

  useEffect(() => {

  }, []);

  const enviarFormulario = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (nome === '') {
      toast('error', 'Nome é obrigatório');
      return;
    }

    if (valor === '') {
      toast('error', 'Valor é obrigatório');
      return;
    }

    if (qtdLimite === '') {
      toast('error', 'Quantidade de ingressos é obrigatório');
      return;
    }

    const dados: Ingresso = {
      id: Number(id),
      setor_id: Number(setorId),
      nome,
      valor: Number(valor),
      qtd_limite: Number(qtdLimite)
      
    };

    criarIngresso(dados)
      .then(() => {
        form.reset();
        toast('success', 'Ingresso cadastrado');
        navigate(`/setor/ingresso/listar/${setorId}`)
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
              <h4 className="card-title">Cadastrar Ingresso</h4>
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
                      placeholder="Nome do Ingresso"
                      onChange={(event) => setNome(event.target.value)}
                      value={nome}
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="form-group col-lg-12">
                    <label htmlFor="valor">Valor</label>
                    <CurrencyInput 
                      InputElement={<input className="form-control" />}
                      onChangeValue={(event, originalValue, maskedValue) => {
                        setValor(originalValue.toString());
                      }}
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="form-group col-lg-12">
                    <label htmlFor="nome">Quantidade Limite de Ingressos</label>
                    <input
                      type="number"
                      className="form-control"
                      id="qtdLimite"
                      placeholder="Numero de ingressos disponivel"
                      onChange={(event) => setQtdLimite(event.target.value)}
                      value={qtdLimite}
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Cadastrar
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
