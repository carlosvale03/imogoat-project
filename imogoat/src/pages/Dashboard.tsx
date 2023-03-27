// import { useCallback } from "react";

interface IList{
  id: number,
  titulo: string,
  nome: string,
  vantagens: Array<string>,
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
    { id: 1 ,titulo: "Edifício", nome: "Apto 301, torre II", vantagens: ["Vantagens do Item 1", "Mais vantagens"], 
    camImg: '/aps/ap4.jpg', tipo: "apartamento", bairro: "Parque de Exposição", lat: -7.083498, lng: -41.434750,
    banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg", "/aps/ap1/llll.webp"], 
    descricao: "Este apartamento localizado no bairro Parque de Exposição é uma ótima opção para quem busca conforto e praticidade. \nCom uma distribuição inteligente de espaço, ele conta com dois quartos aconchegantes, um banheiro completo e uma vaga de garagem para seu veículo. O apartamento é bastante iluminado e arejado, o que proporciona uma sensação de amplitude e bem-estar. Além disso, a água já está inclusa no valor do aluguel, o que torna a administração das contas muito mais fácil e prática. A cozinha é integrada à sala de estar, criando um ambiente bastante funcional e convidativo. O banheiro, por sua vez, é moderno e bem equipado, oferecendo todo o conforto que você precisa para suas necessidades diárias. Por fim, a vaga de garagem garante a segurança e praticidade que você precisa para estacionar seu veículo com tranquilidade. Não perca essa oportunidade e venha conhecer este lindo apartamento no Parque de Exposição." },
    { id: 2 ,titulo: "Item 2", nome: "Nome do Item 2", vantagens: ["Vantagens do Item 2"],
     camImg: "/aps/ap2.jpg", tipo: "apartamento", bairro: "junco", lat: -7.081939, lng: -41.434566,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
     descricao: "" },
    { id: 3 ,titulo: "Item 3", nome: "Nome do Item 3", vantagens: ["Vantagens do Item 3"],
     camImg: "/aps/ap2.png", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: [], 
     descricao: "" },
    { id: 4 ,titulo: "Item 4", nome: "Nome do Item 4", vantagens: ["Vantagens do Item 4"],
     camImg: "/aps/ap1.webp", tipo: "casa", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: [], 
     descricao: "" },
    { id: 5 ,titulo: "Item 5", nome: "Nome do Item 5", vantagens: ["Vantagens do Item 5"],
     camImg: "/aps/ap2.jpg", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: [], 
     descricao: "" },
    { id: 6 ,titulo: "Item 6", nome: "Nome do Item 6", vantagens: ["Vantagens do Item 6"],
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "jureminha", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: [], 
     descricao: "" },
  ];

  return lista;
};