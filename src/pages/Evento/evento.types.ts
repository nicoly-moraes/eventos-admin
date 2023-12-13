export interface Evento {
  id: number;
  nome: string;
  data: string;
  sobre: string;
  img?: string;
  capa?: string;
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