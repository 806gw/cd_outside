import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import HitGallery from "../HitGallery/HitGallery";
import styles from './PostContainer.module.scss'

const PostContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pageState, setPageState] = useState<number>(0);

  return (
    <div className={styles.post_container}>
      <div className={styles.recent_visit}>
        <div>
          최근방문
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </button>
        </div>
      </div>

      <div className={isOpen ? styles.visit_container_open : styles.visit_container_close}>
        <div className={styles.divider}>
          <button
            onClick={() => setPageState(0)}
            className={pageState === 0 ? styles.active : ''}
          >
            최근 방문
          </button>

          <button
            onClick={() => setPageState(1)}
            className={pageState === 1 ? styles.active : ''}
          >
            즐겨찾기
          </button>
          </div>

          <div className={styles.detail_container}>
            {pageState === 0 ? '최근 방문' : '즐겨찾기'}
          </div>
      </div>
      <HitGallery/>
    </div>
  );
};

export default PostContainer;
