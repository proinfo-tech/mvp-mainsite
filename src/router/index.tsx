import HomePage from "@/pages/Homepage";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: '/', 
    element: <HomePage />
  }
]);

export default router;