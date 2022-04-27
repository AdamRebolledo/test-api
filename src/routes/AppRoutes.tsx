import { Route, Routes } from "react-router-dom";
import DetailAnimeView from "../views/detail-anime/DetailAnimeView";
import ListAnimeView from "../views/list-anime/ListAnimeView";

const AppRoutes = () => {
 return (
  // <Routes>
  //  <Route index element={<ListAnimeView />} />
  //  <Route path={"/detail/:id"} element={<DetailAnimeView />} />
  //  </Routes>
  // <Routes>
  //  <Route index element={<ListAnimeView />} />
  //  <Route path={"/detail/:id"} element={<DetailAnimeView />} />
  // </Routes>

  <Routes>
   <Route path='*' element={<>no encontrado</>} />
   <Route path='/' element={<ListAnimeView />} />
   <Route path='/detail/:id' element={<DetailAnimeView />} />
  </Routes>
 );
};

export default AppRoutes;
