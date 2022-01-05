import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularIconButton from "./UIElements/CircularIconButton";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const push = useNavigate();

  const redirectToSearch = () => push(`/?search=${searchTerm}`);

  return (
    <div className="flex flex-1 relative items-center">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={({ charCode }) => charCode === 13 && redirectToSearch()}
        value={searchTerm}
        className="bg-gray-50 ml-5 border border-transparent rounded-full outline-none flex-1 py-3 px-5 text-sm hover:pl-10 active:pl-10 focus:pl-10 hover:border-yellow-400 active:border-yellow-400 focus:border-yellow-400 transition-padding"
        placeholder="Insert your search term.."
      />

      <div className="absolute right-1">
        <CircularIconButton icon="search" onClick={redirectToSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
