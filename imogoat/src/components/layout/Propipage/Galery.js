import { useState, useEffect } from 'react'

function Galery({ camImg }){
    const [imgSrc, setImgSrc] = useState(""); // Define o estado da imagem e uma função para atualizá-lo
    
    useEffect(() => { // Adiciona um efeito colateral que é executado após cada renderização
        const loadImage = async () => { // Define uma função assíncrona para carregar a imagem
            const image = await import('../../../imgs' + camImg); // Importa a imagem dinamicamente usando seu caminho
            setImgSrc(image.default); // Atualiza o estado da imagem com o valor padrão do módulo da imagem importada
        }
        loadImage();// Chama a função para carregar a imagem
    }, [camImg])// Especifica que o efeito colateral deve ser executado sempre que o valor de camImg mudar

    return(
        <div>
            <img src={imgSrc} />
        </div>
    )
}

export default Galery