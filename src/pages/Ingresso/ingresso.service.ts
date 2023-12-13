import { Ingresso } from "./ingresso.types";

const url = "http://localhost:8080/ingressos";

const headers = {
  "Content-Type": "application/json",
}

export async function listarIngressosPorSetorId(setorId: number) {
  const request = {
    headers,
    method: "GET"
  }
  return fetch(`${url}?setor_id=${setorId}`, request)
    .then((res) => res.json())
}

export async function listarIngressosPorId(id: number) {
  const request = {
    headers,
    method: "GET"
  }
  return fetch(`${url}/${id}`, request)
    .then((res) => res.json());
}

export async function criarIngresso(ingresso: Ingresso) {
  const request = {
    headers,
    method: "POST",
    body: JSON.stringify(ingresso)
  }
  return fetch(url, request)
    .then((res) => res.json());
}

export async function atualizarIngresso(id: number, ingresso: Ingresso) {
  const request = {
    headers,
    method: "PUT",
    body: JSON.stringify(ingresso)
  }
  return fetch(`${url}/${id}`, request)
    .then((res) => res.json());
}

export async function excluirIngresso(id: number) {
  const request = {
    headers,
    method: "DELETE"
  }
  return fetch(`${url}/${id}`, request);
}
