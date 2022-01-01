import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageWrapper from "./components/UIElements/PageWrapper";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

import actions from "./store/actions";

const App = () => {
  const list: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );
  const dispatch = useDispatch();

  console.log({ list });

  useEffect(() => {
    dispatch(actions.getList());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ItemDetails />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
};

export default App;
