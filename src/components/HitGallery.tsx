import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HitGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="hit-gallery-container">
      <div className="hit-gallery">
        <div className="text-box">
          HIT 갤러리
          <div className="button-box">
            <span>
              <b>1</b>/3
            </span>
            <button>
              <AiFillCaretLeft />
            </button>
            <button>
              <AiFillCaretRight />
            </button>
          </div>
        </div>

        <div className="gallery-box">
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
        </div>
      </div>

      <div className="login-container">
        <div className="login-box">
          <div className="login-contents">
            <form>
              <div className="id-box">
                <input type="text" placeholder="아이디" className="id" />
                <input type="checkbox" className="checkbox"/> <div className="code-submit">코드 저장</div>
              </div>
              <div className="password-login">
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="password"
                />
                <button>로그인</button>
              </div>
            </form>
          </div>

          <div className="join-find-box">
            <span onClick={() => navigate("/signup")} className="signup">
              회원가입
            </span>
            <span onClick={() => navigate("/find")} className="find">
              아이디 비번 찾기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitGallery;
