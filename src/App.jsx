import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./components/ListItem";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: nanoid(8), content: "Lire" },
    { id: nanoid(8), content: "Faire les courses" },
    { id: nanoid(8), content: "Manger" },
  ]);

  const [todo, setTodo] = useState("")
  const [showValidate, setShowValidate] = useState(false)

  function deleteTodo(id) {
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (todo === "") {
      setShowValidate(true)
      return
    }
    setToDoList([...toDoList, {id : nanoid(8), content : todo }])
    setTodo("")
    setShowValidate(false)
  }

  function editTodo(id, newContent) {
    setToDoList(
      toDoList.map(todo => 
        todo.id === id ? { ...todo, content: newContent } : todo
      )
    );
  }
  

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do list</h1>
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            type="text"
            onChange={e => setTodo(e.target.value) }
            value={todo}
            className="mt-1 block w-full rounded"
            name=""
            id="todo-item"
          />
          {showValidate && (
            <p className="text-red-400">Ajoutez d'abord du contenu à votre tâche</p>
          )}
          <button className="bg-slate-50 mt-4 py-2 px-2 rounded min-w-[115px]">
            Ajouter
          </button>
        </form>
        <ul>
          {toDoList.length === 0 && (
            <li className="text-slate-50">Pas de tâche à afficher...</li>
          )}

          {toDoList.length > 0 &&
            toDoList.map((item) => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} editTodo={editTodo} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
