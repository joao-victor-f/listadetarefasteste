import './App.css'
import ListaDeTarefas from './componentes/ListaDeTarefas';
import { useState } from 'react';

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');

  const handleSubmit = (e) => {
    console.log("hello world");
    e.preventDefault();
    listaDeTarefas.push(tarefa);
    setListaDeTarefas(listaDeTarefas);
    setTarefa("");
    e.target.reset();
  }

  const handleChange = (e) => {
    setTarefa(e.target.value);
    console.log(tarefa);
  }
  return (
    <>
      <form onSubmit={
        handleSubmit
      }>
        <input type="text" name="tarefa" onChange={handleChange}/>
        <input type="submit" placeholder='submit'/>
      </form>
      <ListaDeTarefas tarefas={listaDeTarefas} />
    </>
  )
}

export default App
