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
  const [taskId, setTaskId] = useState<string>("");

  function handleProgress(taskId: string) {
    setTaskProps((prevTasks: any) => {
      return prevTasks.map((task: any) => {
        if (task.id === taskId) {
          if (task.progress === "To Do") {
            return { ...task, progress: "In Progress" };
          } else if (task.progress === "In Progress") {
            return { ...task, progress: "Done" };
          }
        }
        return task;
      });
    });
  }

  function handleProgressBar(progress: string) {
    if (progress === "To Do") {
      return 0;
    } else if (progress === "In Progress") {
      return 50;
    } else {
      return 100;
    }
  }

  function handleTaskText(e: any) {
    const value = e.target.value;
    if (value.trim() !== " ") {
      setTaskText(value);
    } else {
      return;
    }
  }

  function handlePrioritySelect(e: any) {
    const priority = e.target.textContent;
    setPrioritySelected(priority);
  }

  function getTaskProps() {
    const updatedTask = [...taskProps];
    setTaskProps([
      ...updatedTask,
      {
        id: `${Math.floor(Math.random() * 10000)}`,
        text: taskText,
        priority: prioritySelected,
        progress: "To Do",
      },
    ]);
  }

  function openModal(event: MouseEvent<HTMLButtonElement>, taskId: string) {
    if (event.currentTarget.className === "task-edit") {
      setModalType("editModal");
      setTaskId(taskId);
    } else if (event.currentTarget.className === "task-delete") {
      setModalType("deleteModal");
      setTaskId(taskId);
    } else {
      setModalType("addModal");
    }
    setModalShow(true);
  }

  function deleteTask(taskId: string) {
    setTaskProps((prevTasks: any) => {
      return prevTasks.filter((task: any) => task.id !== taskId);
    });
  }

  function editTask(taskId: string) {
    console.log(taskId);
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
          deleteTask={deleteTask}
          editTask={editTask}
          taskId={taskId}
        />
      ) : null}
      <Header openModal={openModal} />
      <Tasks
        handleProgress={handleProgress}
        handleProgressBar={handleProgressBar}
        openModal={openModal}
        taskProps={taskProps}
      />
    </div>
  );
}

export default App;
