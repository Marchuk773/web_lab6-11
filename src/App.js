import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components'
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccesPage";

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
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/success">
            <SuccessPage />
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