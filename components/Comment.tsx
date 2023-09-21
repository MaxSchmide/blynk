import { IComment } from "../types/Comment";

type Props = {
  comment: IComment;
};

const Comment = ({ comment }: Props) => {
  return (
    <article className='comment'>
      <aside
        className='comment__color'
        style={{ backgroundColor: comment.color }}
      ></aside>
      <pre className='comment__text'>{comment.text}</pre>
    </article>
  );
};

export default Comment;
