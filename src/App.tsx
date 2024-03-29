import { useState, MouseEvent } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from "./components/Modal";

function App() {
  const [modalType, setModalType] = useState<string>("");
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [taskText, setTaskText] = useState<string>("");
  const [prioritySelected, setPrioritySelected] = useState<string>("");
  const [taskProps, setTaskProps] = useState<any>([]);

  function handleTaskText(e: any) {
    const taskText = e.target.value;
    setTaskText(taskText);
  }

  function handlePrioritySelect(e: any) {
    const priority = e.target.textContent;
    setPrioritySelected(priority);
  }

  function getTaskProps() {
    const updatedTask = [...taskProps];
    setTaskProps([
      ...updatedTask,
      { text: taskText, priority: prioritySelected },
    ]);
  }

  function openModal(event: MouseEvent<HTMLButtonElement>) {
    if (event.currentTarget.className === "task-edit") {
      setModalType("editModal");
    } else if (event.currentTarget.className === "task-delete") {
      setModalType("deleteModal");
    } else {
      setModalType("addModal");
    }
    setModalShow(true);
  }

  function closeModal() {
    setModalShow(false);
    setTaskText("");
    setPrioritySelected("");
  }

  return (
    <div className="App">
      {modalShow ? (
        <Modal
          closeModal={closeModal}
          modalType={modalType}
          taskText={taskText}
          handleTaskText={handleTaskText}
          handlePrioritySelect={handlePrioritySelect}
          getTaskProps={getTaskProps}
        />
      ) : null}
      <Header openModal={openModal} />
      <Tasks openModal={openModal} taskProps={taskProps} />
    </div>
  );
}

export default App;
