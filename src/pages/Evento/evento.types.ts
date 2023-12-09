export interface Evento {
  nome: string;
  data: string;
  sobre: string;
  imagem: string;
  capa: string;
  endereco: Endereco;
}

export interface Endereco {
  cep: number;
  logradouro: string;
  numero?: number;
  complemento?: string;
  cidade: string;
  uf: string;
  descricao: string;
}