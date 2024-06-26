import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md hover:shadow-md hover:shadow-white">
      <h1 className="text-xl font-bold capitalize underline">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
