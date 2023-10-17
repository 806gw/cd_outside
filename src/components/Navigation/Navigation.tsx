
import { useNavigate } from "react-router-dom"
import { ReactElement, useState } from 'react';
import styles from './Navgation.module.scss'
import DownTriangle from '/Work/cd_outside/src/assets/triangle-down-filled-svgrepo-com.svg'
import UpTriangle from '/Work/cd_outside/src/assets/triangle-up-filled-svgrepo-com.svg'

const Navigation = () => {
    const navigate = useNavigate()
    const List = (): ReactElement => {
      const [close, setClose] = useState<boolean>(false);	// 메뉴닫기 상태 
      const [hide, setHide] = useState<boolean>(true);	// 메뉴접기 상태

    return (
      <nav className={styles.navigation}>
        <div className={styles.nav_container}>
          <span onClick={() => navigate("/gallery")}>갤러리</span>
          <span onClick={() => navigate("/Minor")}>마이너갤</span>
          <span
            onClick={() => navigate("/gal")}
            className={styles.mini_gallery}
          >
            미니갤
          </span>
          <span onClick={() => navigate("/gallog")}>갤로그</span>
          <span onClick={() => navigate("/news")}>디시뉴스</span>
          <span onClick={() => navigate("/nft")}>NFT</span>
          <div
            className={`list ${close ? "close" : "open"}`}
            onMouseEnter={() => {
              setHide(false);
            }}
          >
            <img src={DownTriangle} className={styles.down_triangle} />
            <img src={UpTriangle} className={styles.up_triangle} />
          </div>
          <span onClick={() => navigate("/wiki")}>위키</span>
          <span onClick={() => navigate("/game")}>게임</span>
          <span onClick={() => navigate("/event")}>이벤트</span>
        </div>
      </nav>
    );
}
}

export default Navigation