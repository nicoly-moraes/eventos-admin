import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { estados } from "./estados.data";
import { toast } from "../../helpers/alert.helper";
import { atualizarEvento, criarEvento, listarEventoPorId } from "./evento.service";
import { Evento } from "./evento.types";
import { useNavigate, useParams } from "react-router-dom";
import InputMask from 'react-input-mask';

export default function EditEvento() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [sobre, setSobre] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [capa, setCapa] = useState('');
  const [id] = useState('');
  const { eventoId } = useParams();
  const navigate = useNavigate();

  const [imagemPreview, setImagemPreview] = useState('');
  const [capaPreview, setCapaPreview] = useState('');

  const apiUrl = 'http://localhost:8080';

  useEffect(() => {
    listarEventoPorId(Number(eventoId))
    .then((dados) => {
      setNome(dados.nome);
      setData(dados.data);
      setSobre(dados.sobre);
      setImagemPreview(apiUrl + dados.img);
      setCapaPreview(apiUrl + dados.capa);
      setCep(dados.endereco.cep);
      setLogradouro(dados.endereco.logradouro);
      setNumero(dados.endereco.numero);
      setComplemento(dados.endereco.complemento);
      setCidade(dados.endereco.cidade);
      setUf(dados.endereco.uf);
      setDescricao(dados.endereco.descricao);
    });
  }, []);

  const imagemAlterada = (files: FileList | null) => {
    if (files !== null) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result !== null) {
          setImagem(reader.result.toString());
          setImagemPreview(reader.result.toString());
        }
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  const obterEnderecoDoCEP = (cep: string) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return fetch(url, { method: 'GET' });
  }

  const cepAlterado = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace('-', '');
    setCep(value);
    if (value.length == 8) {
      obterEnderecoDoCEP(value)
        .then((res) => {
          return res.json();
        })
        .then((endereco) => {
          setLogradouro(endereco.logradouro);
          // setBairro(endereco.bairro);
          setCidade(endereco.localidade);
          setUf(endereco.uf);
        })
        .catch((erro) => {

        });
    }
  }

  const capaAlterada = (files: FileList | null) => {
    if (files !== null) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result !== null) {
          setCapa(reader.result.toString());
          setCapaPreview(reader.result.toString());
        }
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  const enviarFormulario = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (nome === '') {
      toast('error', 'Nome é obrigatório');
      return;
    }

    if (data === '') {
      toast('error', 'Date e hora é obrigatório');
      return;
    }

    if (sobre === '') {
      toast('error', 'Sobre é obrigatório');
      return;
    }

    if (cep === '') {
      toast('error', 'Cep é obrigatório');
      return;
    }

    if (logradouro === '') {
      toast('error', 'Logradouro é obrigatório');
      return;
    }

    if (cidade === '') {
      toast('error', 'Cidade é obrigatório');
      return;
    }

    if (uf === '') {
      toast('error', 'Estado é obrigatório');
      return;
    }

    if (descricao === '') {
      toast('error', 'Descricao é obrigatório');
      return;
    }

    const dados: Evento = {
      id: Number(id),
      nome,
      data,
      sobre,
      endereco: {
        cep: parseInt(String(cep).replace('-', '')),
        logradouro,
        numero: numero ? parseInt(numero) : undefined,
        complemento,
        cidade,
        uf,
        descricao
      }
    };

    if(imagem) {
      dados.img = imagem
    }
    if(capa) {
      dados.capa = capa
    }
    atualizarEvento(Number(eventoId), dados)
      .then(() => {
        form.reset();
        toast('success', 'Evento atualizado');
        navigate(`/evento/listar`);
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
              <h4 className="card-title">Atualizar Evento</h4>
            </div>
          </div>
          <div className="iq-card-body">
            <div className="new-user-info">
              <form onSubmit={enviarFormulario}>
                <div className="row">
                  <div className="form-group col-lg-9">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Nome do evento"
                      onChange={(event) => setNome(event.target.value)} 
                      value={nome}
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="form-group col-lg-3">
                    <label htmlFor="data">Data</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="data"
                      placeholder="Data e hora do evento"
                      onChange={(event) => setData(event.target.value)} 
                      value={data}
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <label htmlFor="sobre">Sobre</label>
                    <textarea
                      className="form-control"
                      id="sobre"
                      placeholder="Sobre o evento"
                      onChange={(event) => setSobre(event.target.value)} 
                      value={sobre}
                    />
                  </div>
                </div>
                <hr />
                <h5 className="mb-3">Endereço</h5>
                <div className="row">
                  <div className="form-group col-lg-3">
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      mask="99999-999"
                      maskChar=""
                      type="text"
                      className="form-control"
                      id="cep"
                      placeholder="CEP do evento"
                      onChange={(event) => setCep(event.target.value)} 
                      value={cep}
                    />
                  </div>
                  <div className="form-group col-lg-9">
                    <label htmlFor="logradouro">Logradouro</label>
                    <input
                      type="text"
                      className="form-control"
                      id="logradouro"
                      placeholder="Rua, Av. e etc"
                      onChange={(event) => setLogradouro(event.target.value)} 
                      value={logradouro}
                    />
                  </div>
                  <div className="form-group col-lg-3">
                    <label htmlFor="numero">Número</label>
                    <input
                      type="number"
                      className="form-control"
                      id="numero"
                      placeholder="Número do endereço"
                      onChange={(event) => setNumero(event.target.value)} 
                      value={numero}
                    />
                  </div>
                  <div className="form-group col-lg-9">
                    <label htmlFor="complemento">Complemento</label>
                    <input
                      type="text"
                      className="form-control"
                      id="complemento"
                      placeholder="Complemento do endereço"
                      onChange={(event) => setComplemento(event.target.value)} 
                      value={complemento}
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cidade"
                      placeholder="Cidade do evento"
                      onChange={(event) => setCidade(event.target.value)} 
                      value={cidade}
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label htmlFor="uf">Estado</label>
                    <select 
                      className="form-control" 
                      id="uf"
                      onChange={(event) => setUf(event.target.value)} 
                      value={uf}>
                        <option hidden>Selecione o estado</option>
                        {estados.map((item, index) => {
                          return (
                            <option key={index} value={item.uf}>{item.nome}</option>
                          )
                        })}
                    </select>
                  </div>
                  <div className="form-group col-lg-12">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                      type="text"
                      className="form-control"
                      id="descricao"
                      placeholder="Descrição do endereço"
                      onChange={(event) => setDescricao(event.target.value)} 
                      value={descricao}
                    />
                  </div>
                </div>
                <hr />
                <h5 className="mb-3">Imagens</h5>
                <div className="row">
                  <div className="col-lg-12 input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Principal</span>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupImagem"
                        accept="image/*"
                        onChange={(event) => imagemAlterada(event.target.files)}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupImagem"
                      >
                        Escolher Imagem
                      </label>
                    </div>
                    {imagemPreview &&
                      <div className="w-100">
                        <img
                          src={imagemPreview}
                          alt="Imagem principal"
                          width="200px"
                          className="img-thumbnail mt-3 mb-3" />
                      </div>
                    }
                  </div>
                  <div className="col-lg-12 input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Capa</span>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupCapa"
                        accept="image/*"
                        onChange={(event) => capaAlterada(event.target.files)}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupCapa"
                      >
                        Escolher Capa
                      </label>
                    </div>
                    {capaPreview &&
                      <div className="w-100">
                        <img
                          src={capaPreview}
                          alt="Imagem capa"
                          className="border rounded p-1 mt-3 mb-3"
                          height="200px" />
                      </div>
                    }
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
