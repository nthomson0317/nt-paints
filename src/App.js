import './App.css';
//COMPONENTS
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
//REACT ROUTER
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'

//create basic templates for routes

// const renderHome = (routerProps) => {
//   return <Home />
// }

function App(props) {
  console.log('app.js')
  return (
    <div>
        <Navbar
        history={props.history}/>
        <Switch>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        </Switch>

      </div>
  );
}
// element={<About />}
export default App;



      {/* <Routes>
      <Route path="/about" render={renderAbout} />
      <Route exact path="/" render={renderHome} />
      </Routes> */}