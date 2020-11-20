import { MainItemStyle, MainItemInfo, ImageContainer, PriceContainer }
    from '../styles/main-item-style'
import { Image } from '../components/reusable'

function MainItem(props) {
    return (
        <MainItemStyle>
            <ImageContainer>
                <Image img={props.img} width='250px' height='250px' />
            </ImageContainer>
            <MainItemInfo>
                <h1>{props.header}</h1>
                <div>{props.text}</div>
                <PriceContainer>
                    <div>Price: {props.price}$</div>
                    <button>Add to Cart</button>
                </PriceContainer>
            </MainItemInfo>
        </MainItemStyle>
    );
}

export default MainItem;