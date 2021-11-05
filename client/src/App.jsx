//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
import Homepage from "./Components/Homepage";


function App() {
  return (
  <>
    <HomeLayoutHOC path="/" exact component={Homepage} /> 
  </>
  );
}

export default App;
