import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemListContainer from "./layouts/item-list-container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido al local de Donas!">
        <img src="logo512.png" alt="Imagen de donas" />
      </ItemListContainer>
    </div>
  );
}

export default App;
