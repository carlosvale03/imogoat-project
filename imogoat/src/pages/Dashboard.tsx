// import { useCallback } from "react";

interface IList{
  id: number,
  titulo: string,
  nome: string,
  vantagens: string,
  banheiros: number,
  quartos: number,
  garagem: number,
  camImg: string,
  tipo: string,
  bairro: string,
  lat: number,
  lng: number,
  imgs: Array<string>,
  descricao: string,
}

export const getLista = () => {
  const lista: IList[] = [
    { id: 1 ,titulo: "Edifício", nome: "Apto 301, torre II", vantagens: "Vantagens do Item 1", 
    camImg: '/aps/ap4.jpg', tipo: "apartamento", bairro: "Parque de Exposição", lat: -7.083498, lng: -41.434750,
    banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg", "/aps/ap1/llll.webp"], 
    descricao: "teste para a descrição" },
    { id: 2 ,titulo: "Item 2", nome: "Nome do Item 2", vantagens: "Vantagens do Item 2",
     camImg: "/aps/ap2.jpg", tipo: "apartamento", bairro: "junco", lat: -7.081939, lng: -41.434566,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
     descricao: "" },
    { id: 3 ,titulo: "Item 3", nome: "Nome do Item 3", vantagens: "Vantagens do Item 3",
     camImg: "/aps/ap2.png", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: [], 
     descricao: "" },
    { id: 4 ,titulo: "Item 4", nome: "Nome do Item 4", vantagens: "Vantagens do Item 4",
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: [], 
     descricao: "" },
    { id: 5 ,titulo: "Item 5", nome: "Nome do Item 5", vantagens: "Vantagens do Item 5",
     camImg: "/aps/ap2.jpg", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: [], 
     descricao: "" },
    { id: 6 ,titulo: "Item 6", nome: "Nome do Item 6", vantagens: "Vantagens do Item 6",
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "jureminha", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: [], 
     descricao: "" },
  ];

  return lista;
};