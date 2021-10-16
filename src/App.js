import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import {Route,Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import Homepage from "./components/Homepage";
import BasitKurp from "./components/BasitKurp";
import KisaDevelopmanliKurp from "./components/KisaDevelopmanliKurp";
import ParabolsuzKurp from "./components/ParabolsuzKurp";
import SKurp from "./components/SKurp";
import SepetKurp from "./components/SepetKurp";
import WorkingPrinciple from "./components/WorkingPrinciple";


//in order to use history.push method to roam pages without page refresh we need to create BrowserHistory
//we will create BrowserHistory and assign it to a variale named "history"
//then we will pass this varible to first <div> of App as props below.
const history = createBrowserHistory();

function App() {
  return (
    <div className="App" history={history}>
      <Navibar />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/basitkurp" component={BasitKurp}/>
        <Route exact path="/kisadevelopmanlikurp" component={KisaDevelopmanliKurp}/>
        <Route exact path="/parabolsuzkurp" component={ParabolsuzKurp}/>
        <Route exact path="/skurp" component={SKurp}/>
        <Route exact path="/sepetkurp" component={SepetKurp}/>
        <Route exact path="/calismaprensibi" component={WorkingPrinciple}/>
      </Switch>
      <div className="app-div">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
