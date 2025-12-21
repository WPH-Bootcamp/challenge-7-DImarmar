import Hero from "./components/container/HeroSection";
import { Button } from "./components/ui/Button/Button";
function App() {
  return (
    <>
      <h1 className="text-3xl">code here</h1>
      {/* example */}
      <Hero />
      <Button>Hello</Button>
      <br />
      <Button>Hallo</Button>
    </>
  );
}

export default App;
