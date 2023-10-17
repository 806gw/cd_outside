import {useNavigate} from "react-router-dom"
import {ReactElement, useState} from 'react';
import styles from './Navgation.module.scss'
import DownTriangle from '../../assets/triangle-down-filled-svgrepo-com.svg'
import UpTriangle from '../../assets/triangle-up-filled-svgrepo-com.svg'

const Navigation = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false);	// 메뉴닫힘/열림 상태

  return (
    <nav className={styles.navigation}>
      <div className={styles.nav_container}>
        <span onClick={() => navigate("/gallery")}>갤러리</span>
        <span onClick={() => navigate("/Minor")}>마이너갤</span>
        <span onClick={() => navigate("/gal")} className={styles.mini_gallery}>
          미니갤
        </span>
        <span onClick={() => navigate("/gallog")}>갤로그</span>
        <span onClick={() => navigate("/news")}>디시뉴스</span>
        <span onClick={() => navigate("/nft")}>NFT</span>
        <span
          onMouseOver={() => setIsOpen(true)} //마우스 커서가 span 태그 위에 있을 때 true 로 설정
          onMouseOut={() => setIsOpen(false)} //마우스 커서가 span 태그 밖을 나갔을 때 false 로 설정
        >
          <img src={isOpen ? UpTriangle : DownTriangle} alt={"arrow"} />
          {/*isOpen 이 true 일 때 UpTriangle 사진 / 아니면 DownTriangle*/}

          <div className={isOpen ? styles.over_event : styles.out_event}>
            <div className={styles.hide_nav}>
            <span onClick={() => navigate("/wiki")}>위키</span> <br />
            <span onClick={() => navigate("/game")}>게임</span> <br />
            <span onClick={() => navigate("/event")}>이벤트</span>
            </div>
          </div>
        </span>
      </div>
    </nav>
  );
}


export default Navigation