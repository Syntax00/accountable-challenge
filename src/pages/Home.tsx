import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";

import ListLoadingSkeleton from "../components/UIElements/Skeletons/ListLoadingSkeleton";

const Home = () => {
  const { loading, error, list }: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );

  if (loading) return <ListLoadingSkeleton />;

  return (
    <section>
      <SectionTitle>Currently Available Items</SectionTitle>
    </section>
  );
};

export default Home;
