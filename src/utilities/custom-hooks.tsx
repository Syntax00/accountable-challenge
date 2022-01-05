import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { buildTreeStructure, getParentsItems, searchItems } from "./helpers";

const useTreeGenerator = (list: ListType, searchTerm: string) =>
  useMemo(() => {
    const listWithSearch = searchTerm ? searchItems(list, searchTerm) : list;

    return getParentsItems(listWithSearch).map((parent) =>
      buildTreeStructure(list)(parent)
    );
  }, [list, searchTerm]);

const useListItemProps = (item: ListItemType) => {
  const [showList, toggleList] = useState<boolean>(false);

  const { id, list } = item;
  const hasChildList = list && list.length > 0;
  const canViewDetails = id && !hasChildList;

  const push = useNavigate();

  const clickAction = useCallback(
    () =>
      canViewDetails
        ? push(`/details/${id}`)
        : toggleList((prevState) => !prevState),
    [canViewDetails, id, push]
  );

  return { showList, hasChildList, canViewDetails, clickAction };
};

export { useTreeGenerator, useListItemProps };
