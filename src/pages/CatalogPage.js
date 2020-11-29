import { useEffect, useState } from 'react'
import { ItemsContainer, ItemContainer, PriceContainer, ViewMore } from '../styles/catalog-items-style'
import { Image } from '../components/reusable'
import FilterBar from '../components/filter-bar';
import { reduceText } from '../components/reusable'
import { Link } from "react-router-dom";
import React from 'react';
import { itemsListContext } from '../contexts/items'

export default function CatalogPage() {

    const itemsList = React.useContext(itemsListContext);

    const [border, setBorder] = useState(3);
    const [items, setItems] = useState(itemsList.slice(0, border));
    const [typeFilter, setTypeFilter] = useState('None');
    const [manufacturerFilter, setManufacturerFilter] = useState('None');
    const [searchText, setSearchText] = useState('');

    function showMore() {
        setBorder(border + 3);
    }

    useEffect(() => {
        const pattern = new RegExp(searchText, 'i');

        let filteredItems = itemsList;

        if (searchText !== '') {
            filteredItems = filteredItems.filter(item => (pattern.test(item.header) ||
                pattern.test(item.text) || pattern.test(item.price)));
        }

        if (typeFilter !== 'None') {
            filteredItems = filteredItems.filter(item => (item.type === typeFilter));
        }

        if (manufacturerFilter !== 'None') {
            filteredItems = filteredItems.filter(item => (item.manufacturer === manufacturerFilter));
        }

        setItems(filteredItems.slice(0, border));
    }, [border, typeFilter, manufacturerFilter, searchText, itemsList]);

    return (
        <>
            <ItemsContainer>
                <FilterBar type={[typeFilter, setTypeFilter]}
                    manufacturer={[manufacturerFilter, setManufacturerFilter]}
                    search={[searchText, setSearchText]} />

                {items.map((item) =>
                    <ItemContainer key={`Item${item.id}`}>
                        <Image img={item.img} width='200px' height='200px' />
                        <h1>{reduceText(item.header, 45)}</h1>
                        <div>{reduceText(item.text, 245)}</div>
                        <PriceContainer>
                            <h1>Price:</h1>
                            <h1>{item.price}$</h1>
                        </PriceContainer>
                        <Link to={"/item/" + item.id}>
                            <button>View More</button>
                        </Link>
                    </ItemContainer>
                )}

            </ItemsContainer>
            <ViewMore onClick={showMore}>View More</ViewMore>
        </>
    );
}