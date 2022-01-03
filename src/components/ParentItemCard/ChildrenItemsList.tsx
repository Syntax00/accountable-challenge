import Tooltip from "../UIElements/Tooltip";

import { useListItemProps } from "../../utilities/custom-hooks";

const ListItemIcon = ({ name }: { name: string }) => (
  <i
    className={`w-5 h-5 mr-5 rounded-sm text-secondary flex justify-center items-center fa fa-${name}`}
  />
);

const SubList = ({
  item,
  firstLevel = false,
}: {
  item: ListItemType;
  firstLevel?: boolean;
}) => {
  const { title, description, list = [] } = item;
  const { showList, hasChildList, clickAction, canViewDetails } =
    useListItemProps(item);

  const listUI = list.map((subItem: ListItemType) => (
    <SubList item={subItem} key={subItem.__id__} />
  ));

  return (
    <div className={firstLevel ? "" : "ml-20"}>
      <button
        className="flex w-full text-left items-center relative group"
        onClick={clickAction}
      >
        {hasChildList ? (
          <ListItemIcon name={showList ? "minus" : "plus"} />
        ) : (
          <ListItemIcon name="chain" />
        )}

        <p className="bg-white hover:bg-gray-50 px-10 py-5 pl-10 transition-padding duration-300 shadow-lightShadow mb-4 text-base w-full font-bold rounded-full hover:pl-20">
          {title}

          {description ? (
            <span className="font-medium text-gray-600 mx-3 text-sm">
              ({description})
            </span>
          ) : null}

          {hasChildList ? (
            <span className="mx-3 px-4 py-1 text-white bg-yellow-400 rounded-full font-light">
              {list.length}
            </span>
          ) : null}
        </p>

        <Tooltip
          text={
            hasChildList
              ? "Expand the list"
              : canViewDetails
              ? "Click to view the details"
              : ""
          }
        />
      </button>

      {showList ? listUI : null}
    </div>
  );
};

const ChildrenItemsList = ({ list = [] }: { list: ListType }) => {
  const listJSX = list.map((item: ListItemType) => (
    <SubList item={item} key={item.__id__} firstLevel />
  ));

  return <div>{listJSX}</div>;
};

export default ChildrenItemsList;
