import "./index.css";
import Router from "./components/Router";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  );
}

export default App;
