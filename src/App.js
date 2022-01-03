import { Counter } from "./Counter";
import { Greeting } from "./Greeting";
import { PrincipleIntrestCalculator } from "./PrincipleIntrestCalculator";
import { UseEffectCleanupDemo } from "./UseEffectCleanupDemo";
import {Welcome} from "./Welcome";

//Import 
function App() {
  return (
    <div className="App">
      Hi
      {/* <Welcome />
      <Greeting name={"sai"} /> */}
      {/* <Counter /> */}
      <UseEffectCleanupDemo />
      {/* <PrincipleIntrestCalculator /> */}
    </div>
  );
}

export default App;
