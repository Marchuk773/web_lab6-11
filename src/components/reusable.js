import styled from 'styled-components'
import logo from '../images/tool-logo.svg'
import facebook from '../images/facebook-logo.svg'
import twitter from '../images/twitter-logo.svg'
import linkedIn from '../images/linkedin-logo.svg'
import google from '../images/google-logo.svg'

export function Logo(props) {
    return (
        <img src={logo} alt="logo" height={props.height} width={props.width} />
    );
}

export function Image(props) {
    return (
        <img src={props.img} alt="item_image" height={props.height} width={props.width} />
    );
}

export function Links() {
    return (
        <LinksContainer>
            {icons.map(icon =>
                <a key={icon.name} href={icon.link}>
                    <img src={icon.src} alt={icon.name} height='50px' width='50px' />
                </a>
            )}
        </LinksContainer>
    );
}

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const icons = [{ name: 'facebook', src: facebook, link: '#' }, { name: 'google', src: google, link: '#' },
{ name: 'linkedIn', src: linkedIn, link: '#' }, { name: 'twitter', src: twitter, link: '#' }]