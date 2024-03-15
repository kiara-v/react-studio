// TODO: create a component that displays a single bakery item
export default function BakeryItem({ item, addToCart }) {
    return (
          <div className="item">
            <div className="image">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="desc">
              <div>
                <h2 className="item-name">{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <div className="item-cart">
                <p>${item.price}</p>
                <button className="add" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
    )
}
