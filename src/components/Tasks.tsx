import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Tasks({
  openModal,
  taskProps,
  handleProgressBar,
  handleProgress,
}: {
  openModal: Function;
  taskProps: any;
  handleProgressBar: Function;
  handleProgress: Function;
}) {
  function fontColor(task: any) {
    if (task.priority === "High") {
      return "high-proproty-color";
    } else if (task.priority === "Medium") {
      return "medium-proproty-color";
    }
    return "low-proproty-color";
  }

  return (
    <ul className="tasks">
      {taskProps.map(
        (task: {
          text: string;
          priority: string;
          id: number;
          progress: string;
        }) => (
          <li key={task.id} className="task-card">
            <div className="task-name">
              <span>Task</span>
              <h3>{task.text}</h3>
            </div>
            <div className="task-priority">
              <span>Priority</span>
              <h3 className={fontColor(task)}>{task.priority || "Low"}</h3>
            </div>
            <button
              onClick={() => handleProgress(task.id)}
              className="task-progress"
            >
              {task.progress}
            </button>
            <div className="task-progress-circle">
              <CircularProgressbar value={handleProgressBar(task.progress)} />
            </div>
            <button
              className="task-edit"
              onClick={(event) => openModal(event, task.id)}
            ></button>
            <button
              className="task-delete"
              onClick={(event) => openModal(event, task.id)}
            ></button>
          </li>
        )
      )}
    </ul>
  );
}

export default Tasks;
