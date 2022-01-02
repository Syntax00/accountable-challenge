import { useState } from "react";
import { useSelector } from "react-redux";

import SectionTitle from "../components/SectionTitle";
import ListLoadingSkeleton from "../components/UIElements/Skeletons/ListLoadingSkeleton";
import actions from "../store/actions";

import useTreeGenerator from "../utilities/custom-hooks";

const Home = () => {
  const { loading, error, list }: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const listTree = useTreeGenerator(list, searchTerm);

  if (loading) return <ListLoadingSkeleton />;

  return (
    <section>
      <SectionTitle>Currently Available Items</SectionTitle>

      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      {listTree.map((item: ListItemType) => (
        <h1 key={item.__id__}>{item.title}</h1>
      ))}
    </section>
  );
};

export default Home;
