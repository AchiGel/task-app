function Modal({ closeModal }: { closeModal: Function }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal</h2>
        <button onClick={() => closeModal()}>X</button>
      </div>
    </div>
  );
}

export default Modal;
