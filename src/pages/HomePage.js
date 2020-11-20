import { ItemsContainer, ItemContainer, ViewMore } from '../styles/home-items-style'
import { Image } from '../components/reusable'
import { useState } from 'react';
import MainItem from '../components/main-item.js';

export default function HomePage() {

    const [mainItem, setMainItem] = useState(itemsList[0]);
    const [border, setBorder] = useState(5);
    const [items, setItems] = useState(itemsList.slice(1, border));

    function showMore() {
        setItems(itemsList.slice(1, border + 4));
        setBorder(border + 4);
    }

    return (
        <div>
            <MainItem header={mainItem.header} text={mainItem.text}
                price={mainItem.price} img={mainItem.img} />
            <ItemsContainer>
                {items.map((item) =>
                    <ItemContainer key={`Item${item.id}`}>
                        <Image img={item.img} width='150px' height='150px' />
                        <h1>{item.header.length < 15 ? item.header : item.header.substr(0, 15) + '...'}</h1>
                        <div>{item.text.length < 100 ? item.text : item.text.substr(0, 100) + '...'}</div>
                        <h2>Price: {item.price}$</h2>
                        <button>Details</button>
                    </ItemContainer>
                )}
            </ItemsContainer>
            <ViewMore onClick={showMore}>View More</ViewMore>
        </div>
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