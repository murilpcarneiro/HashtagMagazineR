import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartItem = () => {
  return <article className="flex bg-stone-100 p-1 border rounded-md relative">
    <img src="" alt="" className="h-24" />
    <button className="text-right text-l absolute top-0 right-2 text-slate-950">
      <FontAwesomeIcon icon={faXmark} />
    </button>
    <div className="flex flex-col justify-around mx-2">
      <p className="text-slate-950 text-sm">Nome</p>
      <p className="text-slate-400 text-xs">Tamanho M</p>
      <p className="text-green-700 text-lg">Preço</p>
      <div className="text-slate-950 flex absolute right-2 bottom-0 mb-2">
        <button className="border border-slate-400 hover:border-slate-900 mb-2">
          <FontAwesomeIcon className="p-1" icon={faMinus} />
        </button>
        <p className="p-2 w-8 mx-auto">2</p>
        <button className="border border-slate-400 hover:border-slate-900 mb-2">
          <FontAwesomeIcon className="p-1" icon={faPlus} />
        </button>
      </div>
    </div>
  </article>;
}

export default CartItem;