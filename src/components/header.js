import { Logo } from './reusable'
import { HeaderNavButtonStyle, HeaderWrapper, HeaderNav }
    from '../styles/header_style.js'

function HeaderNavButton(props) {
    return (
        <HeaderNavButtonStyle>
            {props.name}
        </HeaderNavButtonStyle>
    );
}

function Header() {
    return (
        <HeaderWrapper>
            <Logo />
            <HeaderNav>
                <HeaderNavButton name='Home' />
                <HeaderNavButton name='Catalog' />
                <HeaderNavButton name='Cart' />
            </HeaderNav>
        </HeaderWrapper>
    );
}
export default Header;