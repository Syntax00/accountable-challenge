import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularIconButton from "./UIElements/CircularIconButton";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const push = useNavigate();

  const redirectToSearch = useCallback(
    (e: any) => {
      e.preventDefault();
      push(`/?search=${searchTerm}`);
    },
    [searchTerm, push]
  );

  return (
    <form
      onSubmit={redirectToSearch}
      className="flex flex-1 items-center relative"
    >
      <input
        type="text"
        onChange={({ target: { value } }) => setSearchTerm(value)}
        value={searchTerm}
        className="bg-gray-50 ml-2 border border-transparent rounded-full outline-none flex-1 py-3 px-5 text-sm hover:pl-10 active:pl-10 focus:pl-10 hover:border-yellow-400 active:border-yellow-400 focus:border-yellow-400 transition-padding"
        placeholder="Search term.."
      />

      <div className="absolute right-1">
        <CircularIconButton icon="search" type="submit" />
      </div>
    </form>
  );
};

export default SearchBar;
