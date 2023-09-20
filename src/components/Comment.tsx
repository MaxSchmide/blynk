type Props = {
  color: string;
};

const Comment = ({ color }: Props) => {
  return (
    <article className='comment'>
      <aside
        className='comment__color'
        style={{ backgroundColor: color }}
      ></aside>
      <pre className='comment__text'>Some comment</pre>
    </article>
  );
};

export default Comment;
