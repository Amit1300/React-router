
import './App.css';
import UserDetails from "./userdetails"
import DataContextProvider from './DataContext'
import Header from "./Header"
import {BrowserRouter,Route,Switch  } from "react-router-dom";
import Todolist from './Todolist';
import Comment from "./Comments";
import Viewdetails from "./viewdetails"
function App() {
  return (
    <div className="App">
    <DataContextProvider>
    <BrowserRouter>
        <Header/>
      <Switch>
      <Route path="/todolist" component={Todolist} />
      <Route exact path="/comments" component={Comment}/>
      <Route path="/comments/:id" component={Viewdetails}/>
      <Route path="/" render={(routeProps)=><UserDetails />}/>
      </Switch>
      </BrowserRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;
