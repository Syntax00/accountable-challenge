import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useListItemProps = (item: ListItemType) => {
  const [showList, toggleList] = useState<boolean>(false);
  const push = useNavigate();

  const { id, list } = item;
  const hasChildList = list && list.length > 0;
  const canViewDetails = id && !hasChildList;

  const clickAction = useCallback(
    () =>
      canViewDetails
        ? push(`/details/${id}`)
        : toggleList((prevState) => !prevState),
    [canViewDetails, id, push]
  );

  return { showList, hasChildList, canViewDetails, clickAction };
};

export default useListItemProps;
