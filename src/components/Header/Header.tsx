import { FormEvent, useState } from "react";
import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'
import GbswLogo from '../../assets/GBSW_logo.png'

interface Props {
  headerName?: string;
}

const Header = ({headerName}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  
  const handleSearch = (e: FormEvent) => {
    e.preventDefault()

    alert(searchValue)
  }

  return (
    <header className={styles.header}>
      <div className={styles.ico_search}>
        <a href="http://localhost:3000/"><img src={GbswLogo} className={styles.gbsw_ico}/></a>
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
}
export default Header;
