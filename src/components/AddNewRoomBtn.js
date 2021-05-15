import React from "react";

function AddNewRoomBtn({ onClick }) {
    return (
      <button className="AddNewRoom" onClick={onClick}>방 새로 만들기</button>
    );
  }

export default AddNewRoomBtn;