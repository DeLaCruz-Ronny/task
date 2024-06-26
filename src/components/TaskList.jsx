import TaskCard from "./TaskCard";
import { TaskContext } from "../Context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 cel:grid-cols-1 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
