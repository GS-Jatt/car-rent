import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import Page from "./pages/Page";

function App() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home />
      },
        { path: "/page/:page" ,element:<Page/> },
      ],
    },
  ]);
  return <RouterProvider router={routes}/>;
}

export default App;
