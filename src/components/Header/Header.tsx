import { FormEvent, useState } from "react";
import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()

    alert(searchValue)
  }

  return (
    <header className={styles.header}>
      <div className={styles.ico_search}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86DKzPbiSheFqV12Hu3z-rweaVwFLnBUuqj6drd6h8tRq9_ByumZs4IuXPOPuSY9OZg&usqp=CAU"
          className={styles.gbsw_ico}
        />
        <form onSubmit={handleSearch}>
          <input
            placeholder="갤러리 & 통합검색"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;