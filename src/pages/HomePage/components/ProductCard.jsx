import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
/* eslint-disable react/prop-types */
const ProductCard = ({ id, name, brand, image, feminine, price }) => {
  const { setIsCartOpen } = useContext(CartContext);

  return <article className="card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg">
    <img src={image} alt={`Imagem do produto ${id}`} className="group-hover:scale-110 rounded-lg mx-4 my-3 transition duration-300" />
    <p className="mx-4 text-sm text-slate-400">{brand}</p>
    <p className="mx-4 text-sm">{name}</p>
    <p className="mx-4 text-sm text-slate-700">{feminine ? "Feminino" : "Masculino"}</p>
    <p className="mx-4 text-sm text-green-700">{price}</p>
    <button onClick={() => setIsCartOpen(true)} className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 hover:bg-slate-800 cursor-pointer"><FontAwesomeIcon icon={faCartPlus} /></button>
  </article>;
}

export default ProductCard;