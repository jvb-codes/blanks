import "./App.css";
import { GeneralContextProvider } from "./contexts/GeneralContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";

import Home from "./pages/Home";
import TextEntry from "./pages/TextEntry";
import Blanks from "./pages/Blanks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "entry",
    element: <TextEntry />,
  },
  {
    path: "blanks",
    element: <Blanks />,
  },
]);

function App() {
  return (
    <Wrapper>
      <Container>
        <GeneralContextProvider>
          <RouterProvider router={router} />
        </GeneralContextProvider>
      </Container>
    </Wrapper>
  );
}

export default App;
