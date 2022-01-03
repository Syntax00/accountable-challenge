import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DetailsSkeleton from "../components/UIElements/Skeletons/DetailsSkeleton";

const ItemDetails = () => {
  const push = useNavigate();
  const { id } = useParams();
  console.log({ id });
  const { loading, error, list }: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );

  if (loading) return <DetailsSkeleton />;

  return (
    <main>
      {/* Breadcrumbs */}

    </main>
  );
};

export default ItemDetails;
