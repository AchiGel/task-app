function Header({ openModal }: { openModal: Function }) {
  return (
    <header className="header">
      <h1>Task List</h1>
      <button onClick={(event) => openModal(event)}>+ Add Task</button>
    </header>
  );
}

export default Header;
