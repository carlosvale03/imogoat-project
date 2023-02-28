import styles from './Sobre.module.css'

function Sobre(){
    return(
        <div className={styles.container}>
            <h1>Bem-vindo ao ImoGOAT!</h1>

            <p>Somos uma empresa especializada em aluguel de apartamentos e casas em Picos e região, 
            oferecendo as melhores opções de imóveis para locação. Nosso objetivo é ajudar as pessoas a 
            encontrar o lar perfeito com um serviço excepcional e preços atrativos e também oferecer um 
            serviço completo e personalizado que faça a diferença em suas vidas. Trabalhamos com 
            proprietários de imóveis para garantir que nossos clientes tenham acesso a uma ampla variedade
            de opções de apartamentos e casas com diferentes tamanhos e estilos. Se você está 
            procurando um apartamento ou casa para alugar, entre em contato conosco e deixe-nos 
            ajudá-lo a encontrar o seu próximo lar.</p>
        </div>
    )
}

export default Sobre