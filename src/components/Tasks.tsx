function Tasks({
  openModal,
  taskProps,
}: {
  openModal: Function;
  taskProps: any;
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
        (task: { text: string; priority: string }, index: number) => (
          <li key={index} className="task-card">
            <div className="task-name">
              <span>Task</span>
              <h3>{task.text}</h3>
            </div>
            <div className="task-priority">
              <span>Priority</span>
              <h3 className={fontColor(task)}>{task.priority}</h3>
            </div>
            <button className="task-progress">To do</button>
            <div className="task-progress-circle">O</div>
            <button
              className="task-edit"
              onClick={(event) => openModal(event)}
            ></button>
            <button
              className="task-delete"
              onClick={(event) => openModal(event)}
            ></button>
          </li>
        )
      )}
    </ul>
  );
}

export default Tasks;
