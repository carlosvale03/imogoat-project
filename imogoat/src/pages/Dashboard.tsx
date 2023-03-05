// import { useCallback } from "react";

import { Listener } from "@remix-run/router/dist/history";

interface IList{
  id: number,
  titulo: string,
  nome: string,
  vantagens: string,
  camImg: string,
  tipo: string,
  bairro: string,
  lat: number,
  lng: number,
  imgs: Array<string>,
}

export const getLista = () => {
  const lista: IList[] = [
    { id: 1 ,titulo: "Item 1", nome: "Nome do Item 1", vantagens: "Vantagens do Item 1", 
    camImg: '/aps/ap4.jpg', tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
    imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"] },
    { id: 2 ,titulo: "Item 2", nome: "Nome do Item 2", vantagens: "Vantagens do Item 2",
     camImg: "/aps/ap2.jpg", tipo: "apartamento", bairro: "junco", lat: -7.081939, lng: -41.434566,
     imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"] },
    { id: 3 ,titulo: "Item 3", nome: "Nome do Item 3", vantagens: "Vantagens do Item 3",
     camImg: "/aps/ap2.png", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     imgs: [] },
    { id: 4 ,titulo: "Item 4", nome: "Nome do Item 4", vantagens: "Vantagens do Item 4",
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     imgs: [] },
    { id: 5 ,titulo: "Item 5", nome: "Nome do Item 5", vantagens: "Vantagens do Item 5",
     camImg: "/aps/ap2.jpg", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     imgs: [] },
    { id: 6 ,titulo: "Item 6", nome: "Nome do Item 6", vantagens: "Vantagens do Item 6",
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     imgs: [] },
  ];

  return lista;
};