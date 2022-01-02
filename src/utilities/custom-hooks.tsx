import { useMemo } from "react";

import { buildTreeStructure, getParentsItems, searchItems } from "./helpers";

const useTreeGenerator = (list: ListType, search: string) =>
  useMemo(
    () =>
      getParentsItems(searchItems(list, search)).map((parent) =>
        buildTreeStructure(list)(parent)
      ),
    [list, search]
  );

export default useTreeGenerator;
