import React from "react";
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import CheckIcon from '../../assets/check-svgrepo-com (3).svg'
import TriangleIcon from '../../assets/triangle-right-filled-svgrepo-com (2).svg'
import styles from '../HitGallery/HitGallery.module.scss'

const HitGallery = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.hit_gallery_container}>
      <div className={styles.hit_gallery}>
        <div className={styles.text_box}>
          HIT 갤러리
          <div className={styles.button_box}>
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
        <div className={styles.gallery_box}>
          <div className={styles.img}></div>
          <div className={styles.img}></div>
          <div className={styles.img}></div>
          <div className={styles.img}></div>
        </div>

        <div className={styles.text_box1}>
          <div className={styles.live_main}>
            실시간 베스트
            <img src={CheckIcon} className={styles.check_ico} />
            <div className={styles.silverite}>
              실베
              <div>라이트</div>
            </div>
            <img src={CheckIcon} className={styles.check_ico_light} />
            <div className="sil-gallery">실갤</div>
            <img src={TriangleIcon} className={styles.triangle_ico} />
          </div>
          <div className={styles.live_btn}>
            <span>
              <b>1</b>/6
            </span>
            <button>
              <AiFillCaretLeft />
            </button>
            <button>
              <AiFillCaretRight />
            </button>
          </div>
        </div>
        <div className={styles.live_gallery}>
          <div className={styles.component}>
            {[...Array(10)].map((_, i) => (
              <div className={styles.live_gal} key={i}>
                <div className={styles.gal_detail}>
                  <img className={styles.live_img} />
                  <h1>실시간 베스트 갤러리 제목</h1>
                </div>
                <div className={styles.live_location}>
                  <div className={styles.location}>싱글벙글 지구촌</div>
                  <div className={styles.time}>00:00</div>
                </div>
              </div>
            ))}
          </div>
        </div>   
      </div>
      
      <div className={styles.login_container}>
        <div className={styles.login_box}>
          <div className={styles.login_contents}>
            <form>
              <div className={styles.id_box}>
                <input type="text" placeholder="아이디" className={styles.id} />
                <input type="checkbox" className={styles.checkbox} />
                <div className={styles.code_submit}>코드 저장</div>
              </div>
              <div className={styles.password_login}>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className={styles.password}
                />
                <button>로그인</button>
              </div>
            </form>
          </div>
          <div className={styles.join_find_box}>
            <span onClick={() => navigate("/signup")} className={styles.signup}>
              회원가입
            </span>
            <span onClick={() => navigate("/find")} className={styles.find}>
              아이디 비번 찾기
            </span>
          </div>
        </div>
        <div className={styles.mini_gallery}>
          <div className={styles.gallery_title}>
            <h1>실북갤</h1>
            <div className={styles.mini_box}>
              <span onClick={() => navigate("/maintext")}>메인</span>
              <span onClick={() => navigate("/minor")}>마이너</span>
              <span onClick={() => navigate("/mini")}>미니</span>
            </div>
          </div>
          <div className={styles.mini_main}>
            <div className={styles.mini_menu}>
              </div>
          </div>
          <div className={styles.mini_footer}></div> 
        </div>
      </div>
    </div>
  );
};

export default HitGallery;
