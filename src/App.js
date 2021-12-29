import { Counter } from "./Counter";
import { Greeting } from "./Greeting";
import {Welcome} from "./Welcome";

//Import 
function App() {
  return (
    <div className="App">
      Hi
      <Welcome />
      <Greeting name={"sai"} />
      <Counter />
    </div>
  );
}

export default App;
