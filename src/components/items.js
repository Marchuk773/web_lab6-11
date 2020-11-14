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
            header: 'Hammer',
            text: 'regular hammerte%tent.duck%t duck%t.duck%t.duc k%t.duck%t .duck%s ck%t.duc k%t.d',
            price: 123,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F047%2F0%2F9672239%2Fil_fullxfull.701229221_begm.jpg&f=1&nofb=1'
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
                        <div>{item.text.length < 70 ? item.text : item.text.substr(0, 70) + '...'}</div>
                        <h2>Price: {item.price}$</h2>
                        <button>See More</button>
                    </ItemContainer>
                )}
            </ItemsContainer>
            <ViewMore>View More</ViewMore>
        </div>
    );
}
export default Items;