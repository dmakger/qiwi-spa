import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import './App.css';
import Page404 from "./error/Page404";
import {MainPageWrapper} from "./main/core/wrapper/MainPageWrapper";
import {MainPageWrapperContext} from "./main/core/wrapper/core/context/MainPageWrapperContext";
import {MAIN_URL} from "./core/service/urls";
import MainPage from "./main/main/MainPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404/>}/>

          <Route element={
            <MainPageWrapper MainPageWrapperContext={MainPageWrapperContext}>
               <Outlet/>
            </MainPageWrapper>
          }>
            <Route path={MAIN_URL} element={<MainPage/>}/>
          </Route>

          {/*<Route path={`${PLAYER_MOVIE_URL}/:path`} element={<MoviePlayerPage/>}/>*/}
          {/*<Route path={`${PLAYER_TV_SERIES_URL}/:path`} element={<TVSeriesPlayerPage/>}/>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
