import { Home, Customizer } from "./pages";
import { CanvasModel } from "./canvas/index";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
}

export default App;
