import { useMemo } from "react";

import {
  buildTreeStructure,
  getParentsItems,
  searchItems,
} from "../utilities/helpers";

const useTreeGenerator = (list: ListType, searchTerm: string = "") =>
  useMemo(() => {
    const listWithSearch = searchTerm ? searchItems(list, searchTerm) : list;

    return getParentsItems(listWithSearch).map((parent) =>
      buildTreeStructure(list)(parent)
    );
  }, [list, searchTerm]);

export default useTreeGenerator;
