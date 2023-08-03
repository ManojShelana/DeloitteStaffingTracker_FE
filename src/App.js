import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeBanner from "./Component/WelcomePage/WelcomeBanner.js";
import ResourceGrid from "./Component/OnboardingForm/ResourceGrid/ResourceGrid.js";
import ConfigureProjectGrid from "./Component/ConfigureProject/ConfigureProjectGrid/ConfigureProjectGrid";
import Sidebar from "./Component/NavSideBar/MySideNav";
import OffboardingPage from "./Component/OffboardingPage/OffboardingPage";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route exact path={"/"} element={<WelcomeBanner/>} />
        <Route exact path={"/home"} element={<WelcomeBanner/>} />
        <Route path={"/ResourceGrid"} element={<ResourceGrid/>} /> 
        <Route path={"/ConfigureProjectGrid"} element={<ConfigureProjectGrid/>} /> 
        <Route path={"/OffboardingPage"}  element={<OffboardingPage/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter> 
  );
};

export default App;
