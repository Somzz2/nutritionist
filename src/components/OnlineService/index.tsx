import * as C from './styles';
import { Button } from '../Button';

export const OnlineService = () => {
    return (
        <C.Body>
            <C.Container>
                <div className='card'>
                    <h1>CONSULTA ONLINE</h1>
                    <ul>
                        <li>Emagrecimento</li>
                        <li>Nutrição Clínica</li>
                        <li>Nutrição materno infantil</li>
                        <li>Orientação nutricional e ditética</li>
                        <li>Plano alimentar</li>
                        <li>Reeducação alimentar</li>
                    </ul>
                    
                    <a href='https://api.whatsapp.com/send?phone=00000000000&amp;text=Olá,%20gostaria%20de%20marcar%20uma%20consulta%20online!' target="_blank"><Button>Marcar Consulta Online</Button></a>
                </div>
            </C.Container>
        </C.Body>
    )
}