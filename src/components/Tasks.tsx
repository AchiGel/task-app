function Tasks({
  openModal,
  taskProps,
}: {
  openModal: Function;
  taskProps: any;
}) {
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
              <h3>{task.priority}</h3>
            </div>
            <button className="task-progress">To do</button>
            <div className="task-progress-circle">O</div>
            <button className="task-edit" onClick={(event) => openModal(event)}>
              Edit
            </button>
            <button
              className="task-delete"
              onClick={(event) => openModal(event)}
            >
              X
            </button>
          </li>
        )
      )}
    </ul>
  );
}

export default Tasks;
