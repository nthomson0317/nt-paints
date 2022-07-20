import './App.css';
//COMPONENTS
import Home from './components/Home'
import About from './components/About'
//REACT ROUTER
import { Route, Routes, withRouter, Redirect} from 'react-router-dom'

const renderAbout = () => {
  return (
    <About></About>
  )
}

const renderHome = (routerProps) => {
  return <Home 

  />
}
function App() {
  return (
    <div>

      <Routes>
      <Route path="/about" render={renderAbout} />
      <Route exact path="/" render={renderHome} />
      </Routes>
      </div>
  );
}
// element={<About />}
export default App;
