import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ParentItemCard from "../components/ParentItemCard/ParentItemCard";
import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import CircularIconButton from "../components/UIElements/CircularIconButton";
import ListLoadingSkeleton from "../components/UIElements/Skeletons/ListSkeleton";

import actions from "../store/actions";
import { useTreeGenerator } from "../utilities/custom-hooks";

const Home = () => {
  const { loading, error, list }: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const search = searchParams.toString().split("=")[1];
  const listDataTree = useTreeGenerator(list, search);

  const shuffle = useCallback(
    () => dispatch(actions.shuffleList()),
    [dispatch]
  );

  if (loading) return <ListLoadingSkeleton />;

  return (
    <main>
      <SectionTitle
        ExtraControllers={
          <div className="flex">
            <CircularIconButton icon="random" theme="gray" onClick={shuffle} />

            <SearchBar />
          </div>
        }
      >
        Currently Available Items
      </SectionTitle>

      {listDataTree.map((item: ListItemType) => (
        <ParentItemCard key={item.__id__} item={item} />
      ))}
    </main>
  );
};

export default Home;
