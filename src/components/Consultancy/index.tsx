import { Button } from '../Button'
import * as C from './styles'

export const Consultancy = () => {
    return (
        <C.Container>
            <div className='card'>
                <h1>CONSULTORIA NUTRICIONAL</h1>
                    <ul>
                        <li>Elaboração de POPs, procedimentos operacionais padronizados</li>
                        <li>Elaboração de fichas técnicas</li>
                        <li>Elaboração do manual de boas práticas de fabricação</li>
                        <li>Elaboração de cardápios</li>
                        <li>Treinamento de colaboradores</li>
                        <li>Qualificação de fornecedores</li>
                        <li>Visitas de vistoria técnica</li>
                    </ul>
                    <a href='https://api.whatsapp.com/send?phone=00000000000&amp;text=Olá,%20gostaria%20de%20marcar%20uma%20visita%20de%20consultoria!' target="_blank"><Button>Agendar Visita</Button></a>
            </div>
        </C.Container>
    )
}