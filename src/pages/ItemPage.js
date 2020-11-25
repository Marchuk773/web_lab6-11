import { Image } from '../components/reusable.js'
import {
    UpperContainer, ItemInfo, BottomContainer,
    ButtonsContainer, Button
} from '../styles/item-page-style.js'
import { Link, useParams } from "react-router-dom";

export default function ItemPage(props) {

    const { id } = useParams();
    const item = props.itemsList.find(item => (item.id === parseInt(id)));

    return (
        <>
            <UpperContainer>
                <Image img={item.img} height='360px' width='360px' />
                <ItemInfo>
                    <h1>{item.header}</h1>
                    <div>{item.text}</div>
                </ItemInfo>
            </UpperContainer>
            <BottomContainer>
                <h1>Price: {item.price}$</h1>
                <ButtonsContainer>
                    <Link to="/catalog">
                        <Button>Go Back</Button>
                    </Link>
                    <Button>Add to Cart</Button>
                </ButtonsContainer>
            </BottomContainer>
        </>
    );
}