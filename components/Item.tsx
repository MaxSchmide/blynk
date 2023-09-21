import classNames from "classnames";
import { IItem } from "../types/Item";
import {
  removeItem,
  selectItem,
  useAppDispatch,
  useAppSelector,
} from "../store";
import { MouseEvent, useRef } from "react";

type Props = {
  item: IItem;
};

const Item = ({ item }: Props) => {
  const { selected } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleDeleteItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleSelectItem = (e: MouseEvent) => {
    if (e.target !== buttonRef.current) {
      dispatch(selectItem(item.id));
    }
  };
  return (
    <article
      className={classNames("item", {
        item__selected: selected === item.id,
      })}
      onClick={handleSelectItem}
    >
      <h3 className='item__title'>{item.name}</h3>
      <span className='item__count'>{item.count}</span>
      <button
        ref={buttonRef}
        className='btn btn--danger'
        onClick={() => handleDeleteItem(item.id)}
      >
        Delete
      </button>
    </article>
  );
};

export default Item;
