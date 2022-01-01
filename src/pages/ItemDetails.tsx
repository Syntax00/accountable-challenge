import { useNavigate } from "react-router-dom";

const ItemDetails = () => {
  const push = useNavigate();

  return (
    <button type="button" onClick={() => push("/")}>
      Item Details Page
    </button>
  );
};

export default ItemDetails;
