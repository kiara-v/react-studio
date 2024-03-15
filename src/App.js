import "./App.css";
import { useState } from "react";
import BakeryItem from "./components/BakeryItem";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});

  return (
    <div className="App">
      <div className="content">
        <main>
          <h1 className="header">Kiara's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
          <div className="items">
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              <BakeryItem // replace with BakeryItem component
                key={index}
                item={item}
                addToCart={() => {
                  setCart((prevCart) => {
                    const newCart = { ...prevCart };
                    newCart[index] = (newCart[index] || 0) + 1;
                    return newCart;
                  });
                }}
              />
            ))}
          </div>
        </main>
        <aside>
          <h2 className="cart-title header">My Cart</h2>
          {Object.entries(cart).length === 0 ? (
            <p className="nothing">Nothing here just yet!</p>
          ) : (
            <>
              <ul className="cart-items">
                {Object.entries(cart).map(([index, quantity]) => {
                  const item = bakeryData[Number(index)];
                  return (
                    <li key={index}>
                      {quantity}x {item.name}
                    </li>
                  );
                })}
              </ul>
              <p className="total header">
                Total: $
                {Object.entries(cart).reduce((total, [index, quantity]) => {
                  const item = bakeryData[Number(index)];
                  return Number((total + item.price * quantity).toFixed(2));
                }, 0)}
              </p>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;
