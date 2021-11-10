import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../layouts/item-list-container/ItemListContainer";
import ItemDetailContainer from "../layouts/item-detail-container/ItemDetailContainer";
import NotFound from "../layouts/not-found/NotFound";
import CartContainer from "../layouts/cart-container/CartContainer";
import NavBar from "../components/nav-bar/NavBar";
import FinishPurchase from "../components/purchase/FinishPurchase";

const RouterApp = () => {
  return (
    <BrowserRouter>
     <NavBar />
      <Switch>
        <Route exact path="/">
            <ItemListContainer greeting="Bienvenido al local de Donas!"/>
            {/* <img src="logo512.png" alt="Imagen de donas" /> */}
        </Route>
        <Route exact path="/Home">
            <ItemListContainer greeting="Bienvenido al local de Donas!"/>
            {/* <img src="logo512.png" alt="Imagen de donas" /> */}
        </Route>
        <Route exact path="/category/:categoryValue">
            <ItemListContainer greeting="Bienvenido al local de Donas!"/>
        </Route>
        <Route exact path="/category/all">
            <ItemListContainer greeting="Bienvenido al local de Donas!"/>
        </Route>
        <Route exact path="/item/:itemId" component={ItemDetailContainer} />
        <Route exact path="/cart" component={CartContainer} />
        <Route exact path="/checkout" component={FinishPurchase} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterApp;
