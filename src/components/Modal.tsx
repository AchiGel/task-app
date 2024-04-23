import { useState } from "react";

function Modal({
  closeModal,
  modalType,
  taskText,
  handleTaskText,
  getTaskProps,
  handlePrioritySelect,
}: {
  closeModal: Function;
  modalType: string;
  taskText: string;
  handleTaskText: Function;
  getTaskProps: Function;
  handlePrioritySelect: Function;
}) {
  const [selected, setSelected] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleSelect(e: any) {
    if (e.currentTarget.textContent === "High") {
      setSelected("high");
    } else if (e.currentTarget.textContent === "Medium") {
      setSelected("medium");
    } else {
      setSelected("low");
    }
  }

  if (modalType === "addModal") {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>Add Task</h2>
            <button onClick={() => closeModal()}></button>
          </div>
          <div className="modal-task-input">
            <label htmlFor="task">Task</label>
            <input
              id="task"
              type="text"
              placeholder="Type your task here..."
              value={taskText}
              onChange={(e) => {
                handleTaskText(e);
                if (e.target.value) {
                  setIsButtonDisabled(false);
                } else {
                  setIsButtonDisabled(true);
                }
              }}
            />
          </div>
          <div className="modal-task-priority">
            <span>Priority</span>
            <div className="task-priority-buttons">
              <button
                onClick={(e) => {
                  handleSelect(e);
                  handlePrioritySelect(e);
                }}
                className={selected === "high" ? "high-selected" : "high"}
              >
                High
              </button>
              <button
                onClick={(e) => {
                  handleSelect(e);
                  handlePrioritySelect(e);
                }}
                className={selected === "medium" ? "medium-selected" : "medium"}
              >
                Medium
              </button>
              <button
                onClick={(e) => {
                  handleSelect(e);
                  handlePrioritySelect(e);
                }}
                className={selected === "low" ? "low-selected" : "low"}
              >
                Low
              </button>
            </div>
          </div>
          <button
            className="modal-add-task"
            onClick={() => {
              getTaskProps();
              closeModal();
            }}
            disabled={isButtonDisabled}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        {modalType === "deleteModal" ? (
          <>
            <div className="modal-header">
              <h2>delete Task</h2>
              <button onClick={() => closeModal()}>X</button>
            </div>

            <button className="modal-add-task">Delete</button>
          </>
        ) : (
          <>
            <div className="modal-header">
              <h2>Edit Task</h2>
              <button onClick={() => closeModal()}>X</button>
            </div>
            <div className="modal-task-input">
              <label htmlFor="task">Task</label>
              <input
                id="task"
                type="text"
                placeholder="Type your task here..."
              />
            </div>
            <div className="modal-task-priority">
              <span>Priority</span>
              <div className="task-priority-buttons">
                <button>High</button>
                <button>Medium</button>
                <button>Low</button>
              </div>
            </div>
            <button className="modal-add-task">Edit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
