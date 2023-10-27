import React from "react";
import styles from './/Minor.module.scss'

const Minor = () => {
  return (
    <div className={styles.minor}>
      
      활발한 활동을 보여주는 마이너 갤러리는 메인 갤러리리로 승격됩니다.
      <button>마이너 갤러리 만들기</button>
      <div className={styles.minor_top}>
        <div className={styles.popular_gal}>
          <div className={styles.popular_top}>
            <h1>HOT 인기 <div>마이너 갤러리</div></h1>
          </div>
          <div className={styles.popular_mid}>

          </div>
          <div className={styles.popular_bottom}>
            <h3>승격 <div>마이너 갤러리</div></h3>
          </div>
        </div>
        <div className={styles.new_gal}></div>
      </div>
    </div>
  );
};

export default Minor;