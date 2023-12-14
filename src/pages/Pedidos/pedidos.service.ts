const url = "http://localhost:8080/pedidos";

const headers = {
  "Content-Type": "application/json",
}

export async function listarPedidos() {
  const request = {
    headers,
    method: "GET",
  }
  return fetch(url, request)
    .then((res) => res.json());
}