import "./App.css";
import {CartContext} from "./components/context/CartContext";
// import { products } from "./data/products";
// import ItemCount from "./components/ItemCount";
// import ItemList from "./components/item-list/ItemList";
// import ItemListContainer from "./layouts/item-list-container/ItemListContainer";
// import NavBar from "./components/nav-bar/NavBar";
// import ItemDetailContainer from "./layouts/item-detail-container/ItemDetailContainer";
import RouterApp from "./router/Router";

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={[]}>
        {/* <CartProvider> */}
        <RouterApp />
        {/* </CartProvider> */}
      </CartContext.Provider>
    </div>
  );
}

export default App;
