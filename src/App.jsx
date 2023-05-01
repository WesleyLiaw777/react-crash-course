import './App.css';
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  let isModalOpen = false;

  function toggleModal() {
    isModalOpen = !isModalOpen;
  }

  return (
    <div>
      <Title/>

      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value);
        }} />
        <button onClick={toggleModal}>
          Add Todo
          </button>
      </div>

      <div className="todo__wrapper">
        <Todo
          title="Finish FES"
        />
        <Todo
        title="Finish interview section"
        />
        <Todo
        title="Land $100k job"
        />
        {isModalOpen && <Modal title="Delete?"/>}
      </div>
    </div>
  );
}

export default App;
