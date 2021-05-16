import React from "react";

function Room() {
    return (
      <li className="room">
        <ul className="category_list">
          <li className="category_item category1">디자인</li>
          <li className="category_item category2">스터디</li>
        </ul>
        <h3 className="room_title">방 제목</h3>
        <h4 className="room_subtitle">방 소제목</h4>
        <span className="birth_time">1시간 전</span>
        <div className="member_profile_imgs">
          <div className="member_profile_img member1"></div>
          <div className="member_profile_img member2"></div>
          <div className="member_profile_img member3"></div>
        </div>
      </li>
    );
}

export default Room;