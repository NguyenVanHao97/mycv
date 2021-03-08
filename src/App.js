import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Components';
import Resume from './Components/Resume';
import Contacts from './Components/Contacts';

import Portffolio from './Components/Portfolio'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
    <CssBaseline />
      <Route path="/" exact component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portffolio}/>
      <Route path="/contact" component={Contacts}/>
    </>
  );
}

export default App;
