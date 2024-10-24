
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./component/AllRoute";




const App = () => {
  return (
    <div>
      <AllRoutes /> {/* Now Routes are wrapped in a Router */}
    </div>
  );
};

export default App;

