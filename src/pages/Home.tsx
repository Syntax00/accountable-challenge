import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ParentItemCard from "../components/ParentItemCard/ParentItemCard";
import SectionTitle from "../components/SectionTitle";
import CircularIconButton from "../components/UIElements/CircularIconButton";
import ListLoadingSkeleton from "../components/UIElements/Skeletons/ListLoadingSkeleton";

import actions from "../store/actions";
import { useTreeGenerator } from "../utilities/custom-hooks";

const Home = () => {
  const { loading, error, list }: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const listDataTree = useTreeGenerator(list, searchTerm);

  const shuffle = useCallback(
    () => dispatch(actions.shuffleList()),
    [dispatch]
  );

  if (loading) return <ListLoadingSkeleton />;

  return (
    <section>
      <SectionTitle
        ExtraControllers={
          <CircularIconButton icon="random" theme="gray" onClick={shuffle} />
        }
      >
        Currently Available Items
      </SectionTitle>

      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      {listDataTree.map((item: ListItemType) => (
        <ParentItemCard key={item.__id__} item={item} />
      ))}
    </section>
  );
};

export default Home;
