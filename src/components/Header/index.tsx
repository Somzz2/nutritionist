import * as C from './styles';
import logo from '../../assets/images/logo.png'

export const Header = () => {
    return (
        <C.Container>
            <img className='logo' src={logo} alt="logo" />
            <C.Name>Nutricionista</C.Name>
        </C.Container>
    )
}