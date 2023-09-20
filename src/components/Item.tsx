import classNames from "classnames";
import { IItem } from "../types/Item";
import { useAppSelector } from "../store";

type Props = {
  item: IItem;
};

const Item = ({ item }: Props) => {
  const { selected } = useAppSelector((state) => state.items);
  return (
    <article
      className={classNames("item", {
        item__selected: selected === item.id,
      })}
    >
      <h3 className='item__title'>{item.name}</h3>
      <span className='item__count'>{item.count}</span>
      <button className='btn btn--danger '>Delete</button>
    </article>
  );
};

export default Item;
