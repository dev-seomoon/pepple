import React from "react";

function Profile() {
    return (
      <div className="Profile">
        <div className="profile_img"></div>
        <p className="user_name">사용자 닉네임</p>
        <p className="user_job">프론트엔드 개발자</p>
        <p className="user_introduction">쭈꾸미처럼 맛있게 성장하고 싶은 쭈꾸미 프론트엔드 개발자 입니다. 쭈꾸미처럼 맛있게 성장하고 싶은 쭈꾸미 프론트엔드 개발자 입니다</p>
        <button className="modify_profile_bttn">개인정보 수정</button>
        <ul className="sns_list">
          <li className="sns_item"></li>
          <li className="sns_item"></li>
          <li className="sns_item"></li>
          <li className="sns_item"></li>
        </ul>
      </div>
    );
  }

  export default Profile;