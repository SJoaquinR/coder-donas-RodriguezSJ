import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../layouts/item-list-container/ItemListContainer";
import NavBar from "../components/nav-bar/NavBar";
import ItemDetailContainer from "../layouts/item-detail-container/ItemDetailContainer";
// import ItemDetailContainer from "./layouts/item-detail-container/ItemDetailContainer";
// import NotFound from "./layouts/not-found/NotFound";

const RouterApp = () => {
  return (
    <BrowserRouter>
     <NavBar />
      <Switch>
        <Route exact path="/">
            <ItemListContainer greeting="Bienvenido al local de Donas!"/>
            {/* <img src="logo512.png" alt="Imagen de donas" /> */}
        </Route>
         <Route exact path="/item/:itemId" component={ItemDetailContainer} />
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default RouterApp;
