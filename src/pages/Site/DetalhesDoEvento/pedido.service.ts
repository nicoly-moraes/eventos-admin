import { CadastrarPedidoDto } from "./cadastrar-pedido.dto";

const url = "http://localhost:8080/pedidos";

const headers = {
  "Content-Type": "application/json",
}

export async function cadastrarPedido(dados: CadastrarPedidoDto) {
  const request = {
    headers,
    method: "POST",
    body: JSON.stringify(dados)
  }
  return fetch(url, request)
    .then((res) => res.json());
}