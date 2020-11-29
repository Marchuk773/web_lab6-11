import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage';
import Header from './components/header.js';
import Footer from './components/footer.js';
import styled from 'styled-components'
import ItemPage from "./pages/ItemPage";

function App() {

  return (
    <Router>
      <Page>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/catalog">
            <CatalogPage />
          </Route>
          <Route path="/item/:id">
            <ItemPage />
          </Route>
        </Switch>
        <Footer />
      </Page>
    </Router >
  );
}

export default App;

const Page = styled.div`
  background-color: #22223a;
`;