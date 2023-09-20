import { ChangeEvent, FormEvent, useState } from "react";
import { addComment, useAppDispatch, useAppSelector } from "../store";
import Comment from "./Comment";
import { IComment } from "../types/Comment";
import { toast } from "react-hot-toast";

const initialComment = {
  color: "#000",
  text: "",
};

const CommentsForm = () => {
  const {
    items: { selected },
    comments: { data },
  } = useAppSelector((state) => state);
  const [comment, setComment] =
    useState<Omit<IComment, "itemId">>(initialComment);
  const dispatch = useAppDispatch();

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();

    if (!comment.text.trim()) {
      toast.error("Comment can't be empty");
      return;
    }

    const newComment = {
      itemId: selected,
      ...comment,
    };

    dispatch(addComment(newComment));
    setComment(initialComment);
  };

  const handleChangeComment = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setComment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className='card'>
      <h2 className='card__heading'>Comments #{selected}</h2>
      <ul>
        {data
          .filter((comment) => comment.itemId === selected)
          .map((comment) => (
            <li key={comment.text}>
              <Comment comment={comment} />
            </li>
          ))}
      </ul>
      <form
        className='card__form'
        onSubmit={handleAddComment}
      >
        <input
          type='color'
          className='input-color'
          name='color'
          value={comment.color}
          onChange={handleChangeComment}
        />
        <textarea
          className='input'
          placeholder='Type comment here...'
          rows={2}
          name='text'
          value={comment.text}
          onChange={handleChangeComment}
        />
        <button
          type='submit'
          className='btn btn--primary'
        >
          Add New
        </button>
      </form>
    </section>
  );
};

export default CommentsForm;
