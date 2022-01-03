import { useState } from "react";
import { useSelector } from "react-redux";

import ParentItemCard from "../components/ParentItemCard/ParentItemCard";
import SectionTitle from "../components/SectionTitle";
import ListLoadingSkeleton from "../components/UIElements/Skeletons/ListLoadingSkeleton";

import { useTreeGenerator } from "../utilities/custom-hooks";

const Home = () => {
  const { loading, error, list }: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const listDataTree = useTreeGenerator(list, searchTerm);

  if (loading) return <ListLoadingSkeleton />;

  return (
    <section>
      <SectionTitle>Currently Available Items</SectionTitle>

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
