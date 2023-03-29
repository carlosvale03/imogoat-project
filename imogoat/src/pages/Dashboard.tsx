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
  telProprietario: string,
  emailProprietario: string,
  nomeProprietario: string,
  linkWpp: string,
  linkEmail: string,
}

export const getLista = () => {
  const lista: IList[] = [
    { id: 1 ,titulo: "Edifício X", nome: "Apto 301, torre II", vantagens: ["Água inclusa"], 
    camImg: '/aps/ap4.jpg', tipo: "Apartamento", bairro: "Parque de Exposição", lat: -7.083498, lng: -41.434750,
    banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg", "/aps/ap1/llll.webp"], 
    descricao: "Este apartamento localizado no bairro Parque de Exposição é uma ótima opção para quem busca conforto e praticidade. \nCom uma distribuição inteligente de espaço, ele conta com dois quartos aconchegantes, um banheiro completo e uma vaga de garagem para seu veículo. O apartamento é bastante iluminado e arejado, o que proporciona uma sensação de amplitude e bem-estar. Além disso, a água já está inclusa no valor do aluguel, o que torna a administração das contas muito mais fácil e prática. A cozinha é integrada à sala de estar, criando um ambiente bastante funcional e convidativo. O banheiro, por sua vez, é moderno e bem equipado, oferecendo todo o conforto que você precisa para suas necessidades diárias. Por fim, a vaga de garagem garante a segurança e praticidade que você precisa para estacionar seu veículo com tranquilidade. Não perca essa oportunidade e venha conhecer este lindo apartamento no Parque de Exposição.",
    telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
    linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT"},
    
    { id: 2 ,titulo: "Edifício X", nome: "Apto 302, torre I", vantagens: ["Água inclusa"],
     camImg: "/aps/ap2.jpg", tipo: "Apartamento", bairro: "junco", lat: -7.081939, lng: -41.434566,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
    
     { id: 3 ,titulo: "Casa Y", nome: "N° 1001", vantagens: [],
     camImg: "/casas/123.webp", tipo: "Casa", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/casas/dentro/4.jpg", "/casas/dentro/1.jpg", "/casas/dentro/2.jpg", "/casas/dentro/3.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
    
     { id: 4 ,titulo: "Casa Z", nome: "N° 774", vantagens: ["Área espaçosa", "Água inclusa"],
     camImg: "/casas/capa_avconceicao4070.jpeg", tipo: "Casa", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/casas/dentro/4.jpg", "/casas/dentro/1.jpg", "/casas/dentro/2.jpg", "/casas/dentro/3.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
    
     { id: 5 ,titulo: "Casa Grande", nome: "N° 10", vantagens: ["Próximo a UFPI"],
     camImg: "/aps/ap2.jpg", tipo: "casa", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/casas/dentro/4.jpg", "/casas/dentro/1.jpg", "/casas/dentro/2.jpg", "/casas/dentro/3.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
    
     { id: 6 ,titulo: "Edifício Y", nome: "Apto 70", vantagens: ["Próximo a UFPI", "Água inclusa"],
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "junco", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
     
     { id: 7 ,titulo: "Edifício XYZ", nome: "Apto 103, torre I", vantagens: ["Condomínio com segurança 24h"], 
    camImg: '/aps/ap1.webp', tipo: "Apartamento", bairro: "Centro", lat: -7.221183, lng: -39.314052,
    banheiros: 2, quartos: 3, garagem: 2, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
    descricao: "Este belo apartamento localizado no Centro oferece muito conforto e praticidade para você e sua família. \nCom uma área de 90 m², ele conta com três quartos, sendo um deles suíte, além de dois banheiros completos e uma ampla sala de estar. A cozinha é integrada à sala, o que cria um ambiente bastante funcional e convidativo. \nO prédio possui segurança 24 horas, oferecendo maior tranquilidade para os moradores. O apartamento também dispõe de duas vagas de garagem, proporcionando comodidade e segurança para seus veículos. Venha conhecer esta ótima opção e agende já uma visita!",
    telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "fulano@email.com", nomeProprietario: "Fulano",
    linkWpp: "https://wa.me/5585999999999", linkEmail: "mailto:fulano@email.com"},
    
    { id: 8 ,titulo: "Edifício ABC", nome: "Apto 401, torre III", vantagens: ["Área de lazer completa"],
     camImg: "/casas/123.webp", tipo: "Apartamento", bairro: "Boa Vista", lat: -7.209018, lng: -39.319827,
     banheiros: 2, quartos: 3, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
     descricao: "Este apartamento no bairro Boa Vista é ideal para quem busca conforto e lazer. Com três quartos, sendo uma suíte, ele conta ainda com dois banheiros completos e uma ampla sala de estar. A cozinha é integrada à sala, criando um ambiente convidativo e funcional. O prédio possui uma área de lazer completa, com piscina, academia e salão de festas, proporcionando diversão e entretenimento para toda a família. O apartamento também dispõe de uma vaga de garagem para seu veículo. Não perca essa oportunidade e agende já uma visita!",
     telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "beltrano@email.com", nomeProprietario: "Beltrano",
     linkWpp: "https://wa.me/5585999999999", linkEmail: "mailto:beltrano@email.com"},

     { id: 9 ,titulo: "Casa Y", nome: "N° 1001", vantagens: [],
     camImg: "/casas/123.webp", tipo: "Casa", bairro: "Bairro Bomba", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/casas/dentro/4.jpg", "/casas/dentro/1.jpg", "/casas/dentro/2.jpg", "/casas/dentro/3.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
    
     { id: 10 ,titulo: "Casa Z", nome: "N° 774", vantagens: ["Área espaçosa", "Água inclusa"],
     camImg: "/casas/capa_avconceicao4070.jpeg", tipo: "Casa", bairro: "Ipueiras", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/casas/dentro/4.jpg", "/casas/dentro/1.jpg", "/casas/dentro/2.jpg", "/casas/dentro/3.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
    
     { id: 11 ,titulo: "Casa Grande", nome: "N° 10", vantagens: ["Boa pra morar"],
     camImg: "/aps/ap2.jpg", tipo: "casa", bairro: "São José", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/casas/dentro/4.jpg", "/casas/dentro/1.jpg", "/casas/dentro/2.jpg", "/casas/dentro/3.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
    
     { id: 12 ,titulo: "Edifício Y", nome: "Apto 70", vantagens: ["Próximo a UFPI", "Água inclusa"],
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "Bairro Bomba", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },

     { id: 13 ,titulo: "Casa Grande", nome: "N° 10", vantagens: ["Próximo a UFPI"],
     camImg: "/aps/ap2.jpg", tipo: "casa", bairro: "Belo Norte", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/casas/dentro/4.jpg", "/casas/dentro/1.jpg", "/casas/dentro/2.jpg", "/casas/dentro/3.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
    
     { id: 14 ,titulo: "Edifício Y", nome: "Apto 70", vantagens: ["Próximo a UFPI", "Água inclusa"],
     camImg: "/aps/ap1.webp", tipo: "apartamento", bairro: "Belo Norte", lat: -7.083498, lng: -41.434750,
     banheiros: 1, quartos: 2, garagem: 1, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
     descricao: "", telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "email@email.com", nomeProprietario: "Fulano", 
     linkWpp: "https://wa.me/5589994731880", linkEmail: "mailto:email@gmail.com?subject=Interesse em imóvel da ImoGOAT" },
     
     { id: 15 ,titulo: "Edifício XYZ", nome: "Apto 103, torre I", vantagens: ["Condomínio com segurança 24h"], 
    camImg: '/aps/ap1.webp', tipo: "Apartamento", bairro: "São José", lat: -7.221183, lng: -39.314052,
    banheiros: 2, quartos: 3, garagem: 2, imgs: ["/aps/ap1/01_Estar.jpg", "/aps/ap1/llll.webp", "/aps/ap1/SWELL.jpg"], 
    descricao: "Este belo apartamento localizado no Centro oferece muito conforto e praticidade para você e sua família. \nCom uma área de 90 m², ele conta com três quartos, sendo um deles suíte, além de dois banheiros completos e uma ampla sala de estar. A cozinha é integrada à sala, o que cria um ambiente bastante funcional e convidativo. \nO prédio possui segurança 24 horas, oferecendo maior tranquilidade para os moradores. O apartamento também dispõe de duas vagas de garagem, proporcionando comodidade e segurança para seus veículos. Venha conhecer esta ótima opção e agende já uma visita!",
    telProprietario: "(xx) xxxxx-xxxx", emailProprietario: "fulano@email.com", nomeProprietario: "Fulano",
    linkWpp: "https://wa.me/5585999999999", linkEmail: "mailto:fulano@email.com"},
  ];

  return lista;
};