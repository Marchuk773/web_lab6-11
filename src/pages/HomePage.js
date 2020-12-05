import { ItemsContainer, ItemContainer, ViewMore } from './HomePageStyle'
import { Image, Spinner } from '../components/reusable'
import { useEffect, useState } from 'react';
import MainItem from '../components/MainItem.js';
import React from 'react';
import { reduceText } from '../components/reusable'
import { getTools } from '../connection/connection.js';

export default function HomePage() {

    const [items, setItems] = useState(null);
    const [mainItem, setMainItem] = useState({});
    const [secondaryItems, setSecondaryItems] = useState([]);
    const [border, setBorder] = useState(5);

    async function loadItems() {
        setItems(await getTools())
    }

    useEffect(() => loadItems(), []);

    useEffect(() => {
        if (!items) { return }
        setMainItem(items[0]);
        setSecondaryItems(items.slice(1, border));
    }, [items, border]);

    function showMore() {
        setSecondaryItems(items.slice(1, border + 4));
        setBorder(border + 4);
    }

    if (!items) { return <Spinner /> }
    else
        return (
            <>
                <MainItem item={mainItem} />
                <ItemsContainer>
                    {secondaryItems.map((item, index) =>
                        <ItemContainer key={`Item${item.id}`}>
                            <Image img={item.img} width='150px' height='150px' />
                            <h1>{reduceText(item.header, 15)}</h1>
                            <div>{reduceText(item.description, 80)}</div>
                            <h2>Price: {item.price}$</h2>
                            <button onClick={() => {
                                const temp = items[0];
                                items[0] = items[index + 1];
                                items[index + 1] = temp
                                setMainItem(items[0]);
                                setSecondaryItems(items.slice(1, border));
                                setItems(items);
                                window.scrollTo({ top: 0 });
                            }} >Details</button>
                        </ItemContainer>
                    )}
                </ItemsContainer>
                <ViewMore onClick={showMore}>View More</ViewMore>
            </>
        );
}