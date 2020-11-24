import { useState } from 'react'
import { ItemsContainer, ItemContainer, PriceContainer, ViewMore } from '../styles/catalog-items-style'
import { Image } from '../components/reusable'
import FilterBar from '../components/filter-bar';

export default function CatalogPage() {

    const [border, setBorder] = useState(3);
    const [items, setItems] = useState(itemsList.slice(0, border));

    function showMore() {
        setItems(itemsList.slice(0, border + 3));
        setBorder(border + 3);
    }

    return (
        <>
            <ItemsContainer>
                <FilterBar />

                {items.map((item) =>
                    <ItemContainer key={`Item${item.id}`}>
                        <Image img={item.img} width='200px' height='200px' />
                        <h1>{item.header.length < 45 ? item.header : item.header.substr(0, 45) + '...'}</h1>
                        <div>{item.text.length < 245 ? item.text : item.text.substr(0, 245) + '...'}</div>
                        <PriceContainer>
                            <h1>Price:</h1>
                            <h1>{item.price}$</h1>
                        </PriceContainer>
                        <button>View More</button>
                    </ItemContainer>
                )}

            </ItemsContainer>
            <ViewMore onClick={showMore}>View More</ViewMore>
        </>
    );
}

const itemsList = [
    {
        id: 1,
        header: 'Drill (not the military one)',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque eaque, quasi quo, suscipit quibusdam asperiores veniam accusantium assumenda deserunt cumque cupiditate at dicta, vitae odit alias exercitationem necessitatibus tempora.',
        price: 321,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WeC1ZxgDmG7FYh8kTX6K7QHaJQ%26pid%3DApi&f=1'
    },
    {
        id: 2,
        header: 'Hammer',
        text: 'regular hammer',
        price: 123,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
    },
    {
        id: 3,
        header: 'Hammer',
        text: 'regular hammer',
        price: 123,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
    },
    {
        id: 4,
        header: 'Hammer',
        text: 'regular hammer',
        price: 123,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
    },
    {
        id: 5,
        header: 'Super Hammer',
        text: 'Super hammer with very very very very very very very very very very very very very very very long description',
        price: 9999,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mariowiki.com%2Fimages%2F9%2F93%2FSuper_Mario_Maker_2_Hammer_Powerup_Artwork.png&f=1&nofb=1'
    },
    {
        id: 6,
        header: 'Hammer',
        text: 'regular hammer',
        price: 123,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
    },
    {
        id: 11,
        header: 'Drill (not the military one)',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque eaque, quasi quo, suscipit quibusdam asperiores veniam accusantium assumenda deserunt cumque cupiditate at dicta, vitae odit alias exercitationem necessitatibus tempora.',
        price: 321,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WeC1ZxgDmG7FYh8kTX6K7QHaJQ%26pid%3DApi&f=1'
    },
    {
        id: 21,
        header: 'Hammer',
        text: 'regular hammer',
        price: 123,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
    },
    {
        id: 13,
        header: 'Hammer',
        text: 'regular hammer',
        price: 123,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
    },
    {
        id: 41,
        header: 'Hammer',
        text: 'regular hammer',
        price: 123,
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
    }
]