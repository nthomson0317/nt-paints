import './App.css';
//COMPONENTS
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
//REACT ROUTER
import { Route, Routes, withRouter, Redirect} from 'react-router-dom'

//create basic templates for routes



function App(props) {

  let renderHome = (routerProps) => {
    return 
      <Home />
      
  }

  let renderAbout = () => {
    return
    < About />
  }
  console.log('app.js')
  return (
    <div>
        <Navbar
        history={props.history}/>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        </Routes>

      </div>
  );
}
// element={<About />}
export default(App);



      {/* <Routes>
      <Route path="/about" render={renderAbout} />
      <Route exact path="/" render={renderHome} />
      </Routes> */}