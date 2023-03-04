// import { useCallback } from "react";

interface IList{
  id: number,
  titulo: string,
  nome: string,
  vantagens: string,
  camImg: string,
  tipo: string,
  bairro: string,
}

export const getLista = () => {
  const lista: IList[] = [
    { id: 1 ,titulo: "Item 1", nome: "Nome do Item 1", vantagens: "Vantagens do Item 1", 
    camImg: '/aps/ap4.jpg', tipo: "apartamento", bairro: "junco" },
    { id: 2 ,titulo: "Item 2", nome: "Nome do Item 2", vantagens: "Vantagens do Item 2",
     camImg: "/aps/ap2.jpg", tipo: "apartamento", bairro: "junco" },
    { id: 3 ,titulo: "Item 3", nome: "Nome do Item 3", vantagens: "Vantagens do Item 3",
     camImg: "/aps/ap2.png", tipo: "apartamento", bairro: "junco" },
    { id: 4 ,titulo: "Item 4", nome: "Nome do Item 4", vantagens: "Vantagens do Item 4",
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "junco" },
    { id: 5 ,titulo: "Item 5", nome: "Nome do Item 5", vantagens: "Vantagens do Item 5",
     camImg: "/aps/ap2.jpg", tipo: "apartamento", bairro: "junco" },
    { id: 6 ,titulo: "Item 6", nome: "Nome do Item 6", vantagens: "Vantagens do Item 6",
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "junco" },
  ];

  return lista;
};