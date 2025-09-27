// CartWidget.js
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartWidget() {
  const { cart } = useCart();
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-4 left-4 bg-white rounded-full shadow-lg px-4 py-2 flex items-center space-x-2">
      <ShoppingCart />
      <span>{totalItems}</span>
    </div>
  );
}
