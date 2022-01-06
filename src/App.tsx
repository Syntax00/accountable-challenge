import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PageLayout from "./components/PageLayout";
import DetailsSkeleton from "./components/UIElements/Skeletons/DetailsSkeleton";

import actions from "./store/actions";

const Home = lazy(() => import("./pages/Home"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getList());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <PageLayout>
        <Suspense fallback={<DetailsSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<ItemDetails />} />
          </Routes>
        </Suspense>
      </PageLayout>

      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
};

export default App;
