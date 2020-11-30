import { Logo } from './reusable'
import { HeaderNavButtonStyle, HeaderWrapper, HeaderNav }
    from './HeaderStyle.js'
import { Link } from "react-router-dom";

function HeaderNavButton({ name, to }) {
    return (
        <Link to={to}>
            <HeaderNavButtonStyle>
                {name}
            </HeaderNavButtonStyle>
        </Link>
    );
}

function Header() {
    return (
        <HeaderWrapper>
            <Logo height='40px' width='110px' />
            <HeaderNav>
                <HeaderNavButton name='Home' to='/' />
                <HeaderNavButton name='Catalog' to='/catalog' />
                <HeaderNavButton name='Cart' to='/cart' />
            </HeaderNav>
        </HeaderWrapper>
    );
}
export default Header;