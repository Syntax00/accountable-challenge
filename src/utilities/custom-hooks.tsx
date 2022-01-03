import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { buildTreeStructure, getParentsItems, searchItems } from "./helpers";

const useTreeGenerator = (list: ListType, search: string) =>
  useMemo(() => {
    const listWithSearch = search ? searchItems(list, search) : list;

    return getParentsItems(listWithSearch).map((parent) =>
      buildTreeStructure(list)(parent)
    );
  }, [list, search]);

const useListItemProps = (item: ListItemType) => {
  const { id, list } = item;
  const hasChildList = !id && list && list.length > 0;

  const [showList, toggleList] = useState<boolean>(false);
  const push = useNavigate();

  const clickAction = useCallback(
    () =>
      hasChildList
        ? toggleList((prevState) => !prevState)
        : push(`/details/${id}`),
    [hasChildList, id, push]
  );

  return { showList, hasChildList, clickAction };
};

export { useTreeGenerator, useListItemProps };
