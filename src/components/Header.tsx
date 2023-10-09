import { FormEvent, useState } from "react";
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()

    alert(searchValue)
  }

  return (
    <header className="header">
      <form onSubmit={handleSearch}>
        <input
          placeholder="갤러리 & 통합검색"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">
          <FaSearch/>
        </button>
      </form>
    </header>
  );
};

export default Header;
