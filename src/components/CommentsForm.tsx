import Comment from "./Comment";

const CommentsForm = () => {
  return (
    <section className='card'>
      <h2 className='card__heading'>Comments #1111</h2>
      <ul>
        <li>
          <Comment color='#000' />
        </li>
      </ul>
      <form className='card__form'>
        <input
          type='color'
          className='input-color'
        />
        <textarea
          className='input'
          placeholder='Type comment here...'
          rows={2}
        />
        <button className='btn btn--primary'>Add New</button>
      </form>
    </section>
  );
};

export default CommentsForm;
