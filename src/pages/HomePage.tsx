import CommentsForm from "../components/CommentsForm";
import ItemsForm from "../components/ItemsForm";

const HomePage = () => {
  return (
    <div className='container'>
      <div className='home'>
        <aside className='home__sidebar'>
          <h2 className='home__heading'>DAYRY APP</h2>
          <div className='home__comment'>Comment with no sense</div>
        </aside>
        <main className='home__main'>
          <ItemsForm />
          <CommentsForm />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
