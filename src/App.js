import "./App.css";
import { CartProvider } from "./components/context/CartContext";
import RouterApp from "./router/Router";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <RouterApp />
      </CartProvider>
    </div>
  );
}

export default App;
