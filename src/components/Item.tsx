import classNames from "classnames";
import { MouseEvent } from "react";
import {
  removeItem,
  selectItem,
  useAppDispatch,
  useAppSelector,
} from "../store";
import { IItem } from "../types/Item";

type Props = {
  item: IItem;
};

const Item = ({ item }: Props) => {
  const { selected } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  const handleDeleteItem = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    dispatch(removeItem(id));
  };

  const handleSelectItem = (id: string) => {
    dispatch(selectItem(id));
  };
  return (
    <article
      className={classNames("item", {
        item__selected: selected === item.id,
      })}
      onClick={() => handleSelectItem(item.id)}
    >
      <h3 className='item__title'>{item.name}</h3>
      <span className='item__count'>{item.count}</span>
      <button
        className='btn btn--danger'
        onClick={(e) => handleDeleteItem(e, item.id)}
      >
        Delete
      </button>
    </article>
  );
};

export default Item;
