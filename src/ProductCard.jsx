import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard(props){
  const handleClick = () => {
    addToCart({name: props.name, price: props.price});
    navigate("/cart");
  }

  const {addToCart} = useContext(CartContext);
  const navigate = useNavigate();
  
  return( 
      <div>
        <img src={props.img} width={250} height={250}/>
        <p>{props.name}</p>
        <p>{props.price} рублей</p>
        <button onClick={handleClick}>Добавить в корзину</button>
      </div>
  );
}

export default ProductCard;