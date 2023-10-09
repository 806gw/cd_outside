import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import HitGallery from "./Hit.Gallery";

const PostContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pageState, setPageState] = useState<number>(0);

  return (
    <div className="post-container">
      <div className="recent-visit">
        <div>
          최근방문
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </button>
        </div>
      </div>

      <div
        className={isOpen ? "visit-container-open" : "visit-container-close"}
      >
        <div className="divider">
          <button
            onClick={() => setPageState(0)}
            className={pageState === 0 ? "active" : ""}
          >
            최근 방문
          </button>

          <button
            onClick={() => setPageState(1)}
            className={pageState === 1 ? "active" : ""}
          >
            즐겨찾기
          </button>
          </div>

          <div className="detail-container">
            {pageState === 0 ? '최근 방문' : '즐겨찾기'}
          </div>
      </div>
      <HitGallery/>
    </div>
  );
};

export default PostContainer;
