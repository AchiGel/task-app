import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from "./components/Modal";

function App() {
  const [modalShow, setModalShow] = useState(false);

  function openModal() {
    setModalShow(true);
  }

  function closeModal() {
    setModalShow(false);
  }

  return (
    <div className="App">
      {modalShow ? <Modal closeModal={closeModal} /> : null}
      <Header openModal={openModal} />
      <Tasks />
    </div>
  );
}

export default App;
