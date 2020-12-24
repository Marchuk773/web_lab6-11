import { Logo } from './reusable';
import {
    HeaderNavButtonStyle, HeaderWrapper,
    SignOutStyle, HeaderNav
}
    from './HeaderStyle.js';
import { useDispatch } from 'react-redux';
import { signedOut } from '../store/actions/actions.js';
import { useHistory } from 'react-router-dom';
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

    const dispatch = useDispatch();
    const history = useHistory();

    const signOut = () => {
        localStorage.clear();
        dispatch(signedOut());
        history.push('/login');
    }

    return (
        <HeaderWrapper>
            <Logo height='40px' width='110px' />
            <HeaderNav>
                <HeaderNavButton name='Home' to='/' />
                <HeaderNavButton name='Catalog' to='/catalog' />
                <HeaderNavButton name='Cart' to='/cart' />
            </HeaderNav>
            <SignOutStyle onClick={() => signOut()}>Sign Out</SignOutStyle>
        </HeaderWrapper>
    );
}
export default Header;