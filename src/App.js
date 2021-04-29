import React from 'react';
import './App.css'

function Header() {
  return (
    <header>
      <h1>Pepple</h1>
    </header>
  );
}
 
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

function Rooms() {
  return (
    <div className="Room">
      <h2>#Text</h2>
      <ul className="room_list">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </ul>
    </div>
  )
}

function Section() {
  return (
    <div className="Section">
      <Profile />
      <Rooms />
    </div>
  );
}

function AddNewRoom() {
  return (
    <button className="AddNewRoom">방 새로 만들기</button>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <AddNewRoom />
    </div>
  );
}

export default App;