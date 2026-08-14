import { RouterProvider } from "react-router-dom";
import router from "@/app/routes";
import useInputDetection from "./utils/inputDetection/useInputDetection";

function App() {
  console.log('App render');

  useInputDetection()

  return <RouterProvider router={router} />
}

export default App;