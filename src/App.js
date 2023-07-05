import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeBanner from "./Component/WelcomePage/WelcomeBanner.js";
import ResourceGrid from "./Component/OnboardingForm/ResourceGrid/ResourceGrid.js";
import ConfigureProjectGrid from "./Component/ConfigureProject/ConfigureProjectGrid/ConfigureProjectGrid";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path={"/"} element={<WelcomeBanner/>} />
        <Route path={"/ResourceGrid.js"} element={<ResourceGrid/>} /> 
        <Route path={"/ConfigureProjectGrid.js"} element={<ConfigureProjectGrid/>} /> 
        </Routes>
    </Router>  
    </div>
  );
}

export default App;
