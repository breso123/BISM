import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import News, { loader as newsLoader } from "./pages/News";
import Pricing, { loader as ppLoader } from "./pages/Pricing";
import Login, { action as loginAction } from "./pages/Login";
import SignUp, { action as registration } from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import AppLayout from "./pages/AppLayout";
import Financials from "./components/features/financials/financials";
import GridderFS from "./components/features/financials/financialsItems/GridderFS";
import General from "./components/features/general/general";
import GeneralMain from "./components/features/general/generalInfo/GeneralMain";
import CompanyHL from "./components/features/general/CompanyHL";
import StockChart from "./components/features/general/StockChart";
import ReturnOverview from "./components/features/general/ReturnOverview";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "about", element: <About /> },
  { path: "pricing", element: <Pricing />, loader: ppLoader },
  { path: "contact", element: <Contact /> },
  { path: "news", element: <News />, loader: newsLoader },
  { path: "login", element: <Login />, action: loginAction },
  { path: "signup", element: <SignUp />, action: registration },
  {
    path: "app",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="general" /> },
      { path: "financials", element: <Financials /> },
      { path: "financials/:financialsKey", element: <GridderFS /> },
      {
        path: "general",
        element: <General />,
        children: [
          {
            index: true,
            element: <Navigate replace to="stock_chart" />,
          },
          { path: "general_information", element: <GeneralMain /> },
          { path: "company_highlights", element: <CompanyHL /> },
          { path: "stock_chart", element: <StockChart /> },
          { path: "return_overview", element: <ReturnOverview /> },
        ],
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
