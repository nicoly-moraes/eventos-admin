import { Evento } from "./evento.types";

const url = "http://localhost:8080/eventos";

const headers = {
  "Content-Type": "application/json",
}

export async function listarEventos() {
  const request = {
    headers,
    method: "GET"
  }
  return fetch(url, request)
    .then((res) => res.json());
}

export async function listarEventoPorId(id: number) {
  const request = {
    headers,
    method: "GET"
  }
  return fetch(`${url}/${id}` , request)
    .then((res) => res.json());
}

export async function criarEvento(evento: Evento) {
  const request = {
    headers,
    method: "POST",
    body: JSON.stringify(evento)
  }
  return fetch(url, request)
    .then((res) => res.json());
}

export async function atualizarEvento(id: number, evento: Evento) {
  const request = {
    headers,
    method: "PUT",
    body: JSON.stringify(evento)
  }
  return fetch(`${url}/${id}`, request)
    .then((res) => res.json());
}

export async function excluirEvento(id: number) {
  const request = {
    headers,
    method: "DELETE"
  }
  return fetch(`${url}/${id}`, request);
}