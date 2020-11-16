import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Denomination from "./component/Denomination"

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li >
              <Link to="/" >Home </Link>
            </li>
            <li >
              <Link to="/denomination" >Denomination</Link>
            </li>
            <li>
              <Link to="/result/1">Result 1</Link>
            </li>
            <li>
              <Link to="/result/2">Result 2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <p>hello</p>
          </Route>
          <Route exact path="/denomination" component={Denomination} />

          <Route exact path="/result/:id"
            component={(props) => {
              console.log(props);

              const { params } = params.match;

              if (params.id == 5) {
                return (
                  <Redirect to="/login" />
                )
              }

              return (
                <p>Post {params.id}</p>
              )
            }}
          />
          <Route exact path="/login">
            <h1>login</h1>
          </Route>
        </Switch>
      </Router>


    )
  }

}

export default App;