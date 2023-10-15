import "./App.css";
import { Header } from "./components/Header/index";
import { HeaderConfig } from "./utils/config";
import { Register } from "./pages/Register";
import { UserList } from "./pages/UserList";
import { Practice } from "./pages/pratice";
import { EffectDemo } from "./components/EffectDemo";
import { MemoDemo } from "./components/MemoDemo";
import ItemList from "./components/CallBackDemo";
import { AddToCart } from "./components/AddToCart";
import { useState } from "react";
import { CartContext } from "./Providers/cartProvider";

function App() {
  const [items, setItems] = useState([]);
  const addToCart = (item) => {
    setItems([...items, item]);
  };
  const removeFromCart = (item) => {
    let existing = [...items];
    let index = items.findIndex((x) => x.id == item.id);
    existing.splice(index, 1);
    setItems(existing);
  };
  return (
    <CartContext.Provider
      value={{
        itemCount: items,
        addItem: addToCart,
        removeItem: removeFromCart,
      }}
    >
      <div>
        <Header headerConfig={HeaderConfig} />
        <AddToCart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
