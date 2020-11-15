import styled from 'styled-components'
import Header from './components/header.js';
import MainItem from './components/main-item.js';
import Items from './components/items.js';
import Footer from './components/footer.js';

function App() {
  return (
    <Page>
      <Header />
      <MainItem img={drill} header='Drill (not the military one)'
        text={lorem + lorem} price={321} />
      <Items />
      <Footer />
    </Page>
  );
}

export default App;

const Page = styled.div`
  background-color: #22223a
`;

const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque eaque, quasi quo, suscipit quibusdam asperiores veniam accusantium assumenda deserunt cumque cupiditate at dicta, vitae odit alias exercitationem necessitatibus tempora.'
const drill = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WeC1ZxgDmG7FYh8kTX6K7QHaJQ%26pid%3DApi&f=1'
