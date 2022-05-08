import * as C from './styles';
import Photo from '../../assets/images/photo.jpg'

export const Who = () => {
    return (
        <C.Container>
            <h1>Quem sou eu?</h1>
            <div className='cont'>
                
                <img src={Photo} alt="photo" />
                <C.About>
                    Eu sou a Fulana Beltrana de Ciclana, tenho 23 anos e sou formada em Nutrição com especialidade em Nutrição Clínica. Realizo consultas onlines com ótimo valor e preço.
                    <br/><br/>
                    Atuo também com consultoria nutricional para Hotéis, Pousadas, Restaurantes, Mercados, Escolas e Clínicas adequando o local às exigências da Vigilância Sanitária, garantindo um fluxo de trabalho produtivo, reduzindo custos e desperdícios, além de produzir refeições que tenham alto valor nutritivo. 
                </C.About>
            </div>
        </C.Container>
    )
}