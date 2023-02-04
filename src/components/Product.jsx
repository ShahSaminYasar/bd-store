import Products from "./Products";

function Product() {
  return (
    <div className="products">
      {Products.map((product) => (
        <div className="product">
          <img className="product__image" src={product.image} alt="" />
          <h3 className="product__title">{product.title}</h3>
          <span className="product__rating">Rating: {product.rating}/5</span>
          <span className="product__price">Tk.{product.price}</span>
          <button className="product__atc_btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
