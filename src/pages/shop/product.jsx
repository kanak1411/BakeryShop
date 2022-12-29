import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import deleteIcon from './deleteIcon.svg'

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems,updateCartItemCount } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage}  className="productImg"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <img src={deleteIcon} alt="icon" className="deleteIcon" onClick={()=>updateCartItemCount(0,id)}/>
      </div>
    </div>
  );
};
