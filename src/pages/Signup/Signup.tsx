import styles from './Signip.module.scss'
import GbswLogo from '../../assets/GBSW_logo.png'

const Signup = () => {
  return (
    <div className={styles.main_signup}>
      <img src={GbswLogo} />
      <section className={styles.wrap}>
        <div>
          <h3>아이디</h3>
          <span className={styles.signup_input}>
            <input type="text" className={styles.sign_id} />
            <span className={styles.signup_at}>@gbsw.com</span>
          </span>

          <h3>비밀번호</h3>
          <span className={styles.signup_input}>
            <input type="text" className={styles.sign_pw} />
            <span className={styles.pw_lock}></span>
          </span>

          <h3>비밀번호 재확인</h3>
          <span className={styles.signup_input}>
            <input type="text" className={styles.sign_pww} />
            <span className={styles.pw_lock}></span>
          </span>
        </div>

        <div>
          <h3>이름</h3>
          <span className={styles.signup_input}>
            <input type="text" className={styles.sign_name} />
          </span>
          
          <h3>생년월일</h3>
          <span className={styles.birth}>
            <span className={styles.sign_input_birth}>
              <input
                type="text"
                className={styles.signup_birth_yy}
                placeholder="년 (4자)"
                maxLength={4}
              />
            </span>
            <span className={styles.sign_input_birth}>
              <select name="month" className={styles.signup_birth_mm}>
                <option value="month">월</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </span>
            <span className={styles.sign_input_birth}>
              <input
                type="text"
                className={styles.signup_birth_dd}
                placeholder="일"
              />
            </span>
          </span>

          <h3>성별</h3>
          <span className={styles.signup_input}>
            <select
              name="gender"
              id={styles.signup_gender}
              className={styles.selectbox}
            >
              <option value="gender">성별</option>
              <option value="man">남자</option>
              <option value="woman">여자</option>
              <option value="no">선택 안함</option>
            </select>
          </span>

          <span className={styles.choice}>
            <h3>본인 확인 이메일</h3>
            <span>(선택)</span>
          </span>
          <span className={styles.signup_input}>
            <input
              type="text"
              className={styles.signup_email}
              placeholder="선택입력"
            />
          </span>
        </div>

        <div>
          <h3>휴대전화</h3>
          <span className={styles.signup_input}>
            <select
              name="country"
              id={styles.signup_country}
              className={styles.selectbox}
            >
              <option value="ko">대한민국 +82</option>
            </select>
          </span>
          <div className={styles.phone}>
            <span className={styles.signup_input}>
              <input
                type="text"
                className={styles.signup_phone}
                placeholder="전화번호 입력"
              />
            </span>
            <span className={styles.cnum_btn_wrap}>
              <button className={styles.cnum_btn}>인증번호 받기</button>
            </span>
          </div>

          <span className={styles.signup_input_c}>
            <input
              type="text"
              className={styles.signup_cnum}
              placeholder="인증번호를 입력하세요"
            />
          </span>
        </div>

        <div>
          <div className={styles.signup_btn_wrap}>
            <button className={styles.signup_btn}>가입하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Signup;