import CircularIconButton from "../UIElements/CircularIconButton";
import ChildrenItemsList from "./ChildrenItemsList";

import useListItemProps from "../../hooks/useListItemProps";
import { getItemAbbreviation } from "../../utilities/helpers";

const ParentItemCard = ({ item }: { item: ListItemType }) => {
  const { showList, hasChildList, canViewDetails, clickAction } =
    useListItemProps(item);
  const { title, description, list = [] } = item;

  const abbrev = getItemAbbreviation(title);

  return (
    <div className="w-full text-left my-4 border-b-gray-50 border-b-2 transition">
      <button
        onClick={clickAction}
        className="flex w-full text-left justify-start items-center bg-gray-50 p-5 rounded-lg group border-b-2 border-b-transparent transition-colors duration-300 hover:border-b-yellow-400"
      >
        <div className="h-14 w-14 bg-white self-start hidden md:flex items-center justify-center mr-8 rounded-full">
          <span className="font-bold text-secondary">{abbrev}</span>
        </div>

        <div className="flex w-full items-start justify-between pr-0 md:pr-4">
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>

          <CircularIconButton
            icon={
              hasChildList ? "angle-down" : canViewDetails ? "angle-right" : ""
            }
          />
        </div>
      </button>

      {hasChildList && showList ? (
        <div className="bg-gray-50 p-3 pl-3 md:p-10 md:pl-14 rounded-b-lg mb-2">
          <ChildrenItemsList list={list} />
        </div>
      ) : null}
    </div>
  );
};

export default ParentItemCard;
