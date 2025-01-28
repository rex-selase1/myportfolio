import { BrowserRouter as Router , Routes ,Route  } from "react-router-dom";
import Home from "./Home";
import Test from "./Testarea/test";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
