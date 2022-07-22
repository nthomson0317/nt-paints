import './App.css';
//COMPONENTS
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
//REACT ROUTER
import { Route, Routes, withRouter, Redirect} from 'react-router-dom'

//create basic templates for routes

// const renderHome = (routerProps) => {
//   return <Home />
// }

function App() {
  console.log('app.js')
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        </Routes>

      </div>
  );
}
// element={<About />}
export default App;



      {/* <Routes>
      <Route path="/about" render={renderAbout} />
      <Route exact path="/" render={renderHome} />
      </Routes> */}