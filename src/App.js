import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {Gallery} from './components/Gallery'
function App() {
  const data = [
    {
      path: "/nature",
      title: "Nature"
    },
    {
      path: "/mountains",
      title: "Moutains"
    },
    {
      path: "/flowers",
      title: "Flowers"
    },
    {
      path: "/",
      title: "Home"
    }
  ]
  return (
  <BrowserRouter>
  <div className="App">
    <ul>
      {data.map((route, id) => {
        return(
          <li key={id}>
          <Link to={route.path}>{route.title}</Link>
          </li>
        )
      })}
    </ul>
    <Switch>
      {
        data.map((route, id) => {
          return(
            <Route path={route.path} key={id}>
              <Gallery/>
            </Route>
          )
        })
      }
    </Switch>
  </div>
  </BrowserRouter>
  );
}

export default App;
