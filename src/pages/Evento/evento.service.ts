import { Evento } from "./evento.types";

const url = "http://localhost:8080/eventos";

const requestOptions: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  }
};

export async function listarEventos() {
  requestOptions.method = "GET";
    return fetch(url, requestOptions)
      .then((res) => res.json());
}


export async function criarEvento(evento: Evento) {
  requestOptions.method = "POST";
  requestOptions.body = JSON.stringify(evento);
    return fetch(url, requestOptions)
      .then((res) => res.json());
}
