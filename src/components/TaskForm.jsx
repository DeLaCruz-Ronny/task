import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-5 rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
        <input
          className="bg-slate-200 p-3 w-full mb-3 rounded"
          placeholder="Escribir tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="bg-slate-200 p-3 w-full mb-3 rounded"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded hover:bg-indigo-400">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
