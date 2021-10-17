import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./layouts/item-list-container/ItemListContainer";
import NavBar from "./components/nav-bar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido al local de Donas!">
        <img src="logo512.png" alt="Imagen de donas" />
        <ItemCount stock="5" />
      </ItemListContainer>
    </div>
  );
}

export default App;
