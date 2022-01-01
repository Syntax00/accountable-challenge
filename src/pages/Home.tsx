import { useNavigate } from "react-router-dom";

const Home = () => {
  const push = useNavigate();

  return (
    <button type="button" onClick={() => push("/details/1")}>
      Go to Details Page
    </button>
  );
};

export default Home;
