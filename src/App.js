import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components'
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccesPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from 'react-redux';

function App() {

  const isLogged = useSelector(state => state.login);

  return (
    <Router>
      <Page>
        {isLogged ? <Header /> : null}
        <Switch>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          {pages.map(({ path, page }) => {
            if (isLogged) {
              return <Route key={path} exact path={path} component={page} />
            }
            else {
              return <Redirect key={path} to='/login' />
            }
          })}
        </Switch>
        <Footer />
      </Page>
    </Router >
  );
}

export default App;

const pages = [
  { 'path': '/', 'page': HomePage },
  { 'path': '/catalog', 'page': CatalogPage },
  { 'path': '/item/:id', 'page': ItemPage },
  { 'path': '/cart', 'page': CartPage },
  { 'path': '/checkout', 'page': CheckoutPage },
  { 'path': '/success', 'page': SuccessPage }
]

const Page = styled.div`
  background-color: #22223a;
`;