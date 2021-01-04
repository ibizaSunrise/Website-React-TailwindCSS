import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/menu" exact component = {Menu}/>
        <Route path = "/about" component = {About}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
