import { getLista } from './Dashboard.tsx';

function getPropriedadeById(id) {
  const lista = getLista();
  return lista.find((item) => item.id === id);
}

function Propriedade(props) {
    const id = props.match.params.id;
    const propriedade = getPropriedadeById(id);

    console.log(props)
    console.log(propriedade); // imprime o objeto da propriedade no console
  
    return (
      <div>
        <h2>{propriedade.titulo}</h2>
        <img src={propriedade.camImg} alt={propriedade.titulo} />
        <p>{propriedade.nome}</p>
        <p>{propriedade.vantagens}</p>
        <p>{propriedade.tipo}</p>
      </div>
    );
  }

export default Propriedade