import MainPage from "./pages/MainPage/MainPage";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/MainPage/DetailPage/DetailPage";
import SearchPage from "./pages/MainPage/SearchPage/SearchPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path=":movieID" element={<DetailPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
