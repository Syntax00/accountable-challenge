import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

import actions from "./store/actions";

const App = () => {
  const list = useSelector((state: { list: any }) => state.list);
  const dispatch = useDispatch();

  console.log({ list });

  useEffect(() => {
    dispatch(actions.getList());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
