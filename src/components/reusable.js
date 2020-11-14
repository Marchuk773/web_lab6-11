import logo from '../images/tool-logo.svg'

export function Logo() {
    return (
        <img src={logo} alt={"logo"} height='30px' width='80px' />
    );
}

export function Image(props) {
    return (
        <img src={props.img} alt={"item_image"} height={props.height} width={props.width} />
    );
}