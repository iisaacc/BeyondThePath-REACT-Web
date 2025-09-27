import Home from "./pages/Home";
import { CartProvider } from "./components/Cart/CartContext";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;