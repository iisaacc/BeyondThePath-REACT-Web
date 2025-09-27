import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../Cart/CartContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookDates() {
  const { cart } = useCart();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState("card");

  // 🚐 Precio base por día
  const basePrice = 120;

  // Calcular días reservados
  const days =
    startDate && endDate
      ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1
      : 0;

  // Precio vehículo
  const vehiclePrice = days * basePrice;

  // Precio extras
  const extrasPrice = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Precio final
  const total = vehiclePrice + extrasPrice;

  return (
    <section
      id="book"
      className="min-h-screen flex flex-col items-center justify-center to-white py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Book Your Adventure
        </h2>

        {/* Calendario */}
        <div className="mb-6">
          <p className="font-medium mb-2">Choose your dates</p>
          <div className="flex gap-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="border px-3 py-2 rounded-lg"
              placeholderText="Start Date"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="border px-3 py-2 rounded-lg"
              placeholderText="End Date"
            />
          </div>
        </div>

        {/* Formulario datos */}
        <div className="mb-6">
          <p className="font-medium mb-2">Your Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border px-3 py-2 rounded-lg"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-3 py-2 rounded-lg"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border px-3 py-2 rounded-lg md:col-span-2"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="mb-6">
          <p className="font-medium mb-2">Payment Method</p>
          <div className="flex gap-4">
            {["card", "crypto", "bank"].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={`px-4 py-2 rounded-lg border ${
                  paymentMethod === method
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {method === "card" && "💳 Card"}
                {method === "crypto" && "🪙 Crypto"}
                {method === "bank" && "🏦 Bank Transfer"}
              </button>
            ))}
          </div>
        </div>

        {/* Resumen */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Vehicle ({days} days): €{vehiclePrice}</li>
            {cart.items.map((item, i) => (
              <li key={i}>
                {item.title} x{item.quantity}: €{item.price * item.quantity}
              </li>
            ))}
            <li className="font-bold text-lg">Total: €{total}</li>
          </ul>
        </div>

        {/* Confirm button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Proceed to Payment
        </motion.button>
      </motion.div>
    </section>
  );
}
