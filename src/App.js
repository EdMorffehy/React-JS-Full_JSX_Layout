import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom"
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Switch >
                <Route exact path='/' render={()=> <Redirect to='/home'/>} />
                <Route exact path='/home' render={()=> <Main/>}/>
                <Route  path='/services' render={()=> <Services/>}  />
                <Route  path='/about' render={()=> <About/>} />
                <Route  path='/work' render={()=> <Work/>} />
                <Route  path='/contacts' render={()=> <Contacts/>} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
