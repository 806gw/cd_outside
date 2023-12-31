import React from "react";
import styles from './/Minor.module.scss'
import Header from "../../../components/Header/Header";
import Navigation from "../../../components/Navigation/Navigation";
import RightTriangle from '/Work/cd_outside/src/assets/arrowtriangle-right-fill-svgrepo-com (1).svg'
import SearchIcon from '/Work/cd_outside/src/assets/search-svgrepo-com.svg'

const Minor = () => {
  return (
    <>
      <Header headerName={"Minor"} />
      <Navigation headerName={"Minor"} />
      <div className={styles.minor}>
        <div className={styles.minor_title}>
          <p>
            활발한 활동을 보여주는 마이너 갤러리는 &nbsp;
            <span>메인 갤러리로 승격</span>됩니다.
          </p>
          <button>마이너 갤러리 만들기</button>
        </div>
        <div className={styles.minor_top}>
          <div className={styles.pop_new}>
            <div className={styles.popular_gal}>
              <div className={styles.popular_top}>
                <h2>
                  <span>HOT</span> 인기 마이너 갤러리
                </h2>
              </div>
              <div className={styles.popular_mid}></div>
            </div>
            <div className={styles.new_gal}>
              <div className={styles.new_top}>
                <h2>
                  <span>NEW 신설</span> 마이너 갤러리
                </h2>
              </div>
            </div>
          </div>
          <footer className={styles.minor_bottom}>
            <h3>
              <span>승격</span> 마이너 갤러리
            </h3>
          </footer>
        </div>
        <div className={styles.last_visit}>
          <h2>최근 방문 갤러리</h2>
          <button>
            <img src={RightTriangle} />
          </button>
        </div>
        <div className={styles.minor_main}>
          <div className={styles.main_title}>
            <b>공지사항</b>
            <p>경소고 마이너 갤러리 등장!</p>
            <strong className={styles.search_text}>M.마이너갤러리 검색</strong>
            <div>
              <input type="text" />
              <button className={styles.search}>
                <img src={SearchIcon} id={styles.img} />
              </button>
              <button className={styles.all_search}>전체보기</button>
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail_title}></div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail_title}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Minor;