import { FormEvent, useState } from "react";
import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'
import GbswLogo from '../../assets/GBSW_logo.png'

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
          src={GbswLogo}
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
