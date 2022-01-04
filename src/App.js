import { Counter } from "./Counter";
import { Todos } from "./Todos";
import { Greeting } from "./Greeting";
import { PrincipleIntrestCalculator } from "./PrincipleIntrestCalculator";
import { UseEffectCleanupDemo } from "./UseEffectCleanupDemo";
import { UserDashboard } from "./user-dashboard/UserDashboard";
import {Welcome} from "./Welcome";

//Import 
function App() {
  return (
    <div className="App">
      {/* <Welcome />
      <Greeting name={"sai"} /> */}
      {/* <Counter /> */}
      {/* <UseEffectCleanupDemo /> */}
      {/* <UserDashboard /> */}
      {/* <PrincipleIntrestCalculator /> */}
      <Todos /> 
      {/* <ToggleWorld /> */}
    </div>
  );
}

export default App;
