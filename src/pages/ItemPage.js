import { Image, Spinner } from '../components/reusable.js'
import {
    UpperContainer, ItemInfo, BottomContainer,
    ButtonsContainer, Button
} from './ItemPageStyle.js'
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getToolById } from '../connection.js'

export default function ItemPage() {

    const { id } = useParams();

    async function loadItem(id) {
        setItem(await getToolById(id));
    }

    const [item, setItem] = useState();

    useEffect(() => loadItem(id), []);

    if (!item) { return <Spinner /> }
    return (
        <>
            <UpperContainer>
                <Image img={item.img} height='360px' width='360px' />
                <ItemInfo>
                    <h1>{item.header}</h1>
                    <div>{item.description}</div>
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