import "./index.css";
import Router from "./components/Router";
import { CartContext } from "./components/CartContext";

function App() {
  return (
    <div>
      <CartContext.Provider value={new Map()}>
        <Router />
      </CartContext.Provider>
    </div>
  );
}

export default App;
