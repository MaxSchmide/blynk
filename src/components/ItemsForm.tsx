import { ChangeEvent, FormEvent, useState } from "react";
import { addItem, useAppDispatch, useAppSelector } from "../store";
import Item from "./Item";
import { toast } from "react-hot-toast";

const ItemsForm = () => {
  const { data } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  const [itemName, setItemName] = useState<string>("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();

    if (!itemName.trim()) {
      toast.error("Name can't be empty");
      return;
    }

    dispatch(addItem(itemName));
    setItemName("");
  };

  return (
    <section className='card'>
      <h2 className='card__heading'>Items</h2>
      <form
        className='card__form'
        onSubmit={handleAddItem}
      >
        <input
          type='text'
          className='input'
          placeholder='Type name here...'
          value={itemName}
          onChange={handleChangeName}
          required
        />
        <button
          type='submit'
          className='btn btn--primary'
        >
          Add New
        </button>
      </form>
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            className='borders'
          >
            <Item item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemsForm;
