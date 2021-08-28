import { Home, Menu, Offerts, Order } from './components/content';
import './css/App.css';
import Ui from "./components/template";
import DishData from "./data/dishes.json" ;
import DrinkData from "./data/drinks.json"; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Ui>
            <div className = "App" id = "mainContent">
                <Switch>
                    <Route exact path = "/" >
                        <Home />
                        <br/>
                        <br/>
                        <Offerts />
                    </Route>
                    <Route path = "/oferty" >
                      <Offerts />
                    </Route>
                    <Route path = "/zamow" >
                      <Order />
                    </Route>
                    <Route path = "/menu" >
                        <Menu dishes = {DishData} drinks = {DrinkData}/>
                    </Route>
                </Switch>
            </div>
        </Ui>
    </ BrowserRouter>
  );
}

export default App;
