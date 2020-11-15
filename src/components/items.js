import { ItemsContainer, ItemContainer, ViewMore } from '../styles/items_style'
import { Image } from '../components/reusable'

const { useState } = require("react");

function Items(props) {

    const [items, setItems] = useState([
        {
            header: 'Hammer',
            text: 'regular hammer',
            price: 123,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
        },
        {
            header: 'Hammer',
            text: 'regular hammer',
            price: 123,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
        },
        {
            header: 'Hammer',
            text: 'regular hammer',
            price: 123,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
        },
        {
            header: 'Super Hammer',
            text: 'Super hammer with very very very very very very very very very very very very very very very long description',
            price: 9999,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mariowiki.com%2Fimages%2F9%2F93%2FSuper_Mario_Maker_2_Hammer_Powerup_Artwork.png&f=1&nofb=1'
        },
        {
            header: 'Hammer',
            text: 'regular hammer',
            price: 123,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
        }
    ])

    return (
        <div>
            <ItemsContainer>
                {items.map((item, index) =>
                    <ItemContainer key={`Item${index}`}>
                        <Image img={item.img} width='150px' height='150px' />
                        <h1>{item.header}</h1>
                        <div>{item.text.length < 100 ? item.text : item.text.substr(0, 100) + '...'}</div>
                        <h2>Price: {item.price}$</h2>
                        <button>Details</button>
                    </ItemContainer>
                )}
            </ItemsContainer>
            <ViewMore>View More</ViewMore>
        </div>
    );
}
export default Items;