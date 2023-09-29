import { Home, Customizer } from "./pages";
import { Canvas } from "./canvas/index";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
