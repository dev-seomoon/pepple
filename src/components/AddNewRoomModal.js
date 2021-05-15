import React from "react";
import "./Modal.css";

function AddNewRoomModal({ state, closeModal }) {
    return (
        <div className={ state ? 'openModal' : 'modal'}>
            모달
            <button onClick={closeModal}>닫기</button>
        </div>
    );
}

export default AddNewRoomModal;