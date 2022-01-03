import ChildList from "./ChildrenItemsList";
import CircularIconButton from "../UIElements/CircularIconButton";

import { useListItemProps } from "../../utilities/custom-hooks";

// TO BE UNIT-TESTED
const getItemAbbreviation = (title: string): string =>
  title
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const ParentItemCard = ({ item }: { item: ListItemType }) => {
  const { showList, hasChildList, clickAction } = useListItemProps(item);
  const { title, description, list = [] } = item;

  const abbrev = getItemAbbreviation(title);

  return (
    <div className="w-full text-left my-4 border-b-gray-50 border-b-2 transition">
      <button
        onClick={clickAction}
        className="flex w-full text-left justify-start items-center bg-gray-50 p-5 rounded-lg group border-b-2 border-b-transparent transition-colors duration-300 hover:border-b-yellow-400"
      >
        <div className="h-14 w-14 bg-white self-start flex items-center justify-center mr-8 rounded-full">
          <span className="font-bold text-secondary">{abbrev}</span>
        </div>

        <div className="flex w-full items-start justify-between relative pr-4">
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>

          <CircularIconButton
            icon={hasChildList ? "angle-down" : "angle-right"}
          />
        </div>
      </button>

      {hasChildList && showList ? (
        <div className="bg-gray-50 p-10 pl-14 rounded-b-lg mb-2">
          <ChildList list={list} />
        </div>
      ) : null}
    </div>
  );
};

export default ParentItemCard;
