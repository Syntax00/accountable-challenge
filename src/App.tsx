import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PageLayout from "./components/PageLayout";
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
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ItemDetails />} />
        </Routes>
      </PageLayout>
      
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
};

export default App;
