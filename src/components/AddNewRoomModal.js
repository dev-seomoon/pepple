import React from 'react';
import '../Modal.css';
import ModalExitIcon from '../modal_exit_icon.svg';

function AddNewRoomModal({ state, closeModal }) {
    return (
        <div className={state ? 'openModal modal' : 'modal'}>
            <div className='modal_container'>
                <header className='modal_header'>
                    방 새로 만들기
                    <img src={ModalExitIcon} className="modal_exit_btn"/>
                </header>
                <section className='modal_contents'>
                    <form className="modal_form">
                        <div className="form_list">
                            <div className="form_item">
                                <span className="form_item_title">카테고리</span>
                                <div className="modal_category_list">
                                    <span>
                                        <input type="checkbox" name="design" id="design"></input>
                                        <label for="design" className="category_item_label">디자인</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="development" id="development"></input>
                                        <label for="development" className="category_item_label">개발</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="project" id="project"></input>
                                        <label for="project" className="category_item_label project">프로젝트</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="study" id="study"></input>
                                        <label for="study" className="category_item_label">스터디</label>
                                    </span>
                                </div>
                            </div>
                            <div class="form_item">
                                <span className="form_item_title">대제목</span>
                                <input
                                    type="text"
                                    className="form_text_input"
                                    placeholder="페플러의 관심을 끌 수 있도록 제목을 설정해 주세요!"
                                ></input>
                            </div>
                            <div class="form_item">
                                <span className="form_item_title">소제목</span>
                                <input
                                    type="text"
                                    className="form_text_input"
                                    placeholder="스터디에 대해 잘 알 수 있게 적어주세요!"
                                ></input>
                            </div>
                            <div class="form_item">
                                <span className="form_item_title">참여 인원</span>
                                <select className="form_select">
                                    <option>인원 수를 선택해 주세요. </option>
                                </select>
                            </div>
                        </div>
                        <button type='submit' className="form_submit_button">완료</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default AddNewRoomModal;