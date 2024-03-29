function Tasks({ openModal }: { openModal: Function }) {
  return (
    <ul className="tasks">
      <li className="task-card">
        <div className="task-name">
          <span>Task</span>
          <h3>Go To Gym</h3>
        </div>
        <div className="task-priority">
          <span>Priority</span>
          <h3>High</h3>
        </div>
        <button className="task-progress">To do</button>
        <div className="task-progress-circle">O</div>
        <button className="task-edit" onClick={() => openModal()}>
          Edit
        </button>
        <button className="task-delete" onClick={() => openModal()}>
          X
        </button>
      </li>
    </ul>
  );
}

export default Tasks;
