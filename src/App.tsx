import { useState, MouseEvent } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from "./components/Modal";

function App() {
  const [modalType, setModalType] = useState<string>("");
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [taskText, setTaskText] = useState<string>("");
  const [prioritySelected, setPrioritySelected] = useState<string>("Low");
  const [taskProps, setTaskProps] = useState<any>([]);
  const [progress, setProgress] = useState<string>("To Do");

  function handleProgress() {
    if (progress === "To Do") {
      setProgress("In Progress");
    } else if (progress === "In Progress") {
      setProgress("Done");
    }
  }

  function handleProgressBar() {
    if (progress === "To Do") {
      return 0;
    } else if (progress === "In Progress") {
      return 50;
    } else {
      return 100;
    }
  }

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
      <Tasks
        handleProgress={handleProgress}
        handleProgressBar={handleProgressBar}
        progress={progress}
        openModal={openModal}
        taskProps={taskProps}
      />
    </div>
  );
}

export default App;
