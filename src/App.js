import "./App.css";
import MovieApp from "./component/MovieApp";
import MovieList from "./component/MovieList/MovieList";
import AddMovie from "./component/AddMovie/AddMovie";
import { Link, Switch, Route } from "react-router-dom";
import MoreInformation from "./component/MoreInformation/MoreInformation";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route path="/MoreInformation" component={MoreInformation} />
      </Switch>
    </div>
  );
}

export default App;
