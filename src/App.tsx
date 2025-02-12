import { PokemonProvider } from "./context/PokemonProvider";
import { Home } from "./pages/Home";

export function App() {
  return (
    <PokemonProvider>
      <Home />
    </PokemonProvider>
  );
}
