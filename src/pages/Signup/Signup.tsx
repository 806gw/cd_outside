import styles from './Signip.module.scss'

const Signup = () => {
  return (
    <div id={styles.header}>
      <div id={styles.wrapper}>
        <div id={styles.content}>
          <h3>
            <label htmlFor={styles.id}>아이디</label>
          </h3>
          <span className={styles.box_int_id}>
            <input
              type="text"
              id={styles.id}
              className={styles.int}
              maxLength={20}
            />
            <span className={styles.step_url}>@google.com</span>
          </span>
          {/* BIRTH */}
          <div>
            <h3><label htmlFor="yy">생년월일</label></h3>
            <div id={styles.bir_wrap}>
              {/* BIRTH_YY */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;