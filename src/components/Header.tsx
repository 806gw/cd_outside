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
      <div className="ico-search">
        <img
          src="https://o.remove.bg/downloads/c45cb8fb-3327-4ea1-be00-fcd4140fa0e8/image-removebg-preview.png"
          className="gbsw-ico"
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
