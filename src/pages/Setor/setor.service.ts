import { Setor } from "./setor.types";

const url = "http://localhost:8080/setores";

const headers = {
  "Content-Type": "application/json",
}

export async function listarSetoresPorEventoId(eventoId: number) {
  const request = {
    headers,
    method: "GET"
  }
  return fetch(`${url}?evento_id=${eventoId}`, request)
    .then((res) => res.json());
}

export async function listarSetorPorId(id: number) {
  const request = {
    headers,
    method: "GET"
  }
  return fetch(`${url}/${id}`, request)
    .then((res) => res.json());
}

export async function criarSetor(setor: Setor) {
  const request = {
    headers,
    method: "POST",
    body: JSON.stringify(setor)
  }
  return fetch(url, request)
    .then((res) => res.json());
}

export async function atualizarSetor(id: number, setor: Setor) {
  const request = {
    headers,
    method: "PUT",
    body: JSON.stringify(setor)
  }
  return fetch(`${url}/${id}`, request)
    .then((res) => res.json());
}

export async function excluirSetor(id: number) {
  const request = {
    headers,
    method: "DELETE"
  }
  return fetch(`${url}/${id}`, request);
}
