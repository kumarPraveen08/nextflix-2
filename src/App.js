import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import Home from "pages/home/Home";
import Movie from "pages/movie/Movie";
import Movies from "pages/movies/Movies";
import NotFound from "pages/notfound/NotFound";
import Series from "pages/series/Series";
import SingleSeries from "pages/tv/SingleSeries";
import { useEffect } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // window.location.reload();
  }, [pathname]);
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/series/:id",
        element: <SingleSeries />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
