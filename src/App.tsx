import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  { path: "/auth", element: <AuthPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
