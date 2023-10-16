import { useNavigate } from "react-router-dom"
import styles from './Navgation.module.scss'
const Navigation = () => {
    const navigate = useNavigate()

    return (
        <nav className={styles.navigation}>
            <div className={styles.nav_container}>
                <span onClick={() => navigate('/gallery')}>갤러리</span>
                <span onClick={() => navigate('/news')}>뉴스</span>
                <span onClick={() => navigate('/gal')}>미니갤</span>
                <span onClick={() => navigate('/gallog')}>갤로그</span>
                <span onClick={() => navigate('/nft')}>NFT</span>
                <span onClick={() => navigate('/wiki')}>위키</span>
                <span onClick={() => navigate('/game')}>게임</span>
                <span onClick={() => navigate('/event')}>이벤트</span>
            </div>
        </nav>
    )
}

export default Navigation