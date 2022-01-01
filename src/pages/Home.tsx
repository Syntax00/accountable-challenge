import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ListLoadingSkeleton from "../components/UIElements/Skeletons/ListLoadingSkeleton";

const Home = () => {
  const push = useNavigate();
  const { loading, error, list }: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );

  if (loading) return <ListLoadingSkeleton />;

  return (
    <button type="button" onClick={() => push("/details/1")}>
      Go to Details Page
    </button>
  );
};

export default Home;
