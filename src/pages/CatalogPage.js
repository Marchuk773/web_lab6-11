import { useEffect, useState } from 'react'
import { ItemsContainer, ItemContainer, PriceContainer, ViewMore } from './CatalogPageStyle'
import { Image } from '../components/reusable'
import FilterBar from '../components/FilterBar';
import { reduceText } from '../components/reusable'
import { Link } from "react-router-dom";
import React from 'react';
import { getFilteredTools } from '../connection/connection.js';

export default function CatalogPage() {

    const [border, setBorder] = useState(3);
    const [items, setItems] = useState([]);
    const [showedItems, setShowedItems] = useState([]);
    const [typeFilter, setTypeFilter] = useState('None');
    const [manufacturerFilter, setManufacturerFilter] = useState('None');
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        (async function () {
            setItems(await getFilteredTools(typeFilter, manufacturerFilter));
        })()
    }, [typeFilter, manufacturerFilter]);

    function showMore() {
        setBorder(border + 3);
    }

    useEffect(() => {
        if (!items) { return }
        const pattern = new RegExp(searchText, 'i');
        let filteredItems = items;
        if (searchText !== '') {
            filteredItems = items.filter(item => (pattern.test(item.header) ||
                pattern.test(item.description) || pattern.test(item.price)));
        }
        setShowedItems(filteredItems.slice(0, border));
    }, [border, searchText, items]);

    return (
        <>
            <ItemsContainer>
                <FilterBar type={[typeFilter, setTypeFilter]}
                    manufacturer={[manufacturerFilter, setManufacturerFilter]}
                    search={[searchText, setSearchText]} />
                {showedItems.map((item) =>
                    <ItemContainer key={`Item${item.id}`}>
                        <Image img={item.img} width='200px' height='200px' />
                        <h1>{reduceText(item.header, 45)}</h1>
                        <div>{reduceText(item.description, 245)}</div>
                        <PriceContainer>
                            <h1>Price:</h1>
                            <h1>{item.price}$</h1>
                        </PriceContainer>
                        <Link to={"/item/" + item.id}>
                            <button onClick={() => (window.scrollTo({ top: 0 }))}>View More</button>
                        </Link>
                    </ItemContainer>
                )}
            </ItemsContainer>
            <ViewMore onClick={showMore}>View More</ViewMore>
        </>
    );
}