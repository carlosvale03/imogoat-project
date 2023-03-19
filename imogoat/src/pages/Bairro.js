import {getLista} from './Dashboard.tsx'

function Bairro({ bairro }){
    const lista = getLista();

    return(
        <div>
            <h1>{bairro}</h1>
        </div>
    )
}

export default Bairro