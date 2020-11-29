import { ItemsContainer, ItemContainer, ViewMore } from '../styles/home-items-style'
import { Image } from '../components/reusable'
import { useState } from 'react';
import MainItem from '../components/main-item.js';
import React from 'react';
import { itemsListContext } from '../contexts/items'
import { reduceText } from '../components/reusable'

export default function HomePage() {

    const itemsList = React.useContext(itemsListContext);

    const [items, setItems] = useState(itemsList);
    const [mainItem, setMainItem] = useState(itemsList[0]);
    const [border, setBorder] = useState(5);
    const [secondaryItems, setSecondaryItems] = useState(items.slice(1, border));

    function showMore() {
        setSecondaryItems(items.slice(1, border + 4));
        setBorder(border + 4);
    }

    return (
        <>
            <MainItem header={mainItem.header} text={mainItem.text}
                price={mainItem.price} img={mainItem.img} />
            <ItemsContainer>
                {secondaryItems.map((item, index) =>
                    <ItemContainer key={`Item${item.id}`}>
                        <Image img={item.img} width='150px' height='150px' />
                        <h1>{reduceText(item.header, 15)}</h1>
                        <div>{reduceText(item.text, 80)}</div>
                        <h2>Price: {item.price}$</h2>
                        <button onClick={() => {
                            const temp = items[0];
                            items[0] = items[index + 1];
                            items[index + 1] = temp
                            setMainItem(items[0]);
                            setSecondaryItems(items.slice(1, border));
                            setItems(items);
                        }} >Details</button>
                    </ItemContainer>
                )}
            </ItemsContainer>
            <ViewMore onClick={showMore}>View More</ViewMore>
        </>
    );
}