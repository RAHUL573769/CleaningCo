import { RouterProvider } from "react-router-dom";

import router from "./Pages/routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
