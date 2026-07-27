import "./App.css";
import { CalculateScore } from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Deepsikha Patra"
        University="C. V. Raman Global University"
        total={284}
        goal={300}
      />
    </div>
  );
}

export default App;