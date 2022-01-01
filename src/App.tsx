import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import ItemDetails from "./pages/ItemDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center h-36">
        <Link to="/details/1">
          <h1 className="text-3xl font-bold text-gray-500">
            Challenge Kickoff
          </h1>
        </Link>
      </div>

      <Routes>
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
