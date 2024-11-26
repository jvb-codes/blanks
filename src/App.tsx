import "./App.css";
import { WorkSheetContextProvider } from "./contexts/WorkSheetContext";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import WorkSheet from "./components/WorkSheet";

function App() {
  return (
    <Wrapper>
      <Container>
        <WorkSheetContextProvider>
          <WorkSheet />
        </WorkSheetContextProvider>
      </Container>
    </Wrapper>
  );
}

export default App;
