import { FooterContainer, FooterContent, FooterText, FooterCopyright, LinksContainer }
    from '../styles/footer-style'
import { Logo, Links } from './reusable'

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <h1>WesternBugM!</h1>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum aspernatur alias consequatur distinctio voluptate quidem tempora libero corporis nemo! Unde.</div>
                </FooterText>
                <Logo height='60px' width='160px' />
                <LinksContainer>
                    <Links />
                </LinksContainer>
            </FooterContent>
            <FooterCopyright>2020 IoT &copy; pls don't steal</FooterCopyright>
        </FooterContainer>
    );
}

export default Footer;